use Data::Dumper;
use Mojo::URL;
use Mojo::UserAgent;
use Mojolicious::Types;
use Image::Size;

use feature 'say';

my $ua = Mojo::UserAgent->new;
$ua->max_redirects(10);
my $types = Mojolicious::Types->new;
$types->type(ico => [qw(image/x-icon image/vnd.microsoft.icon)]);

my $x = 0;
my $y = 0;
while ( <> ) {
  chomp;
  unless ( $_ ) {
    $x = $y = 0;
    say;
    next;
  }
  my ($label, $url) = split /\t/;
  my $filename = lc($label);
  $filename =~ s/\W/_/g;
  $url = Mojo::URL->new($url);
  say qq(    { "width": 100, "height": 100, "initialPosition":"$y-$x", "class": "folder-brick-icon", "link": "$url", "src": "img/icons/$filename", "text": "$label" },);
  $x++;
  if ( $x > 4 ) { $y++; $x=0; }
  next if ((glob("$filename.*"))[0]);

  my $app = $ua->get($url);
  my $icons = $app->res->dom->find(
    "link[rel=\"apple-touch-icon-precomposed\"],link[rel=\"apple-touch-icon\"],link[rel=\"shortcut icon\"],link[rel=\"icon\"],meta[property=\"og:image\"]"
  )->each(sub{$_->{href}||=$_->{content}})->grep(sub{$_->{href} && $_->{href} !~ /svg/});
  push @$icons, {href => $url->clone->path('/favicon.ico')->to_abs};

  my $best_icon = $icons->each(sub{
    $_->{icon_url} = Mojo::URL->new($_->{href});
    foreach my $attr ( qw/scheme host port/ ) {
      $_->{icon_url}->$attr($url->$attr) unless $_->{icon_url}->$attr;
    }
    $_->{icon} = Mojo::UserAgent->new->max_redirects(10)->get($_->{icon_url});
    if ( $_->{icon}->res->code == 200 ) {
      my $content = $_->{icon}->res->content->asset->slurp;
      ($_->{x}) = imgsize(\$content);
      ($_->{ext}) = $types->detect($_->{icon}->res->headers->content_type);
    }
  })->grep(sub{$_->{x}})->sort(sub{$b->{x} <=> $a->{x}})->first;

  if ( $best_icon ) {
    if ( $best_icon->{icon}->res->content->asset->size ) {
      say "Icon: $best_icon->{icon_url} -> $filename.$best_icon->{ext}->[0]";
      if ( $best_icon->{ext}->[0] ) {
        $best_icon->{icon}->res->content->asset->move_to("$filename.$best_icon->{ext}->[0]");
      } else {
        say $best_icon->{icon}->res->headers->content_type;
      }
      next;
    }
  }
  say "No Icon: $url";
}

print while <DATA>;

__DATA__
function hires { rm -f ${2%.*}.* ; cp $1 ${2%.*}.${1##*.}; }
hires ../FacebookAppIcon.png facebook.png 
hires ../Pandora_AppIcon.png pandora.ico 
hires ../SpotifyAppIcon.png spotify.ico 
hires ../YouTubeAppIcon.png youtube.png 
hires ../WebMD_AppIcon.png webmd.png 
hires ../Nest_AppIcon.png nest.png 
hires ../TwitterAppIcon.png twitter.ico 
hires ../PinterestAppIcon.png pinterest.png 
hires ../weather.png weather.png
hires ../LinkedInAppIcon.png linkedin.ico 
hires ../Instagram_AppIcon.png instagram.png 
hires ../GoogleWallet_AppIcon.png wallet.ico 
hires ../GooglePlus_AppIcon.png google_.ico 
hires ../GoogleHangouts_AppIcon.png google_hangouts.ico 
hires ../GoogleCalendar_AppIcon.png calendar.ico 
hires ../GoogleDrive_AppIcon.png storage.ico 
hires ../GoogleDocs_AppIcon.png documents.ico 
hires ../GoogleDocs_AppIcon.png spreadsheets.ico 
hires ../GoogleDocs_AppIcon.png presentations.ico 
hires ../Flickr_AppIcon.png flickr.png 
hires ../Email.png gmail.ico
hires ../contacts.png contacts.png
hires ../AppearIn_AppIcon.png video_chat.png 
hires ../AmazonPrime_AppIcon.png amazon_books.ico 
hires ../AmazonPrime_AppIcon.png amazon_tv.ico 
hires ../BrokerageAccount_AppIcon-copy.png scottrade.ico 
