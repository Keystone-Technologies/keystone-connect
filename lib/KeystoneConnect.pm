package KeystoneConnect;
use Mojo::Base 'Mojolicious';
use Mojo::Transaction::WebSocket;
use Digest::MD5 qw(md5_hex);
use Mojo::JSON qw(decode_json);

# This method will run once at server start
sub startup {
  my $self = shift;

  $self->secrets(['new_passw0rd', 'old_passw0rd', 'very_old_passw0rd']);
  $self->sessions->cookie_name('mysession');
  $self->session(expiration => 604800);

  # Documentation browser under "/perldoc"
  $self->plugin('PODRenderer');
  $self->plugin(JSONP => callback => 'callback');
  
  my $ws = Mojo::Transaction::WebSocket->new;
  
  # Router
  my $r = $self->routes;

  # Normal route to controller
  #$r->get('/')->to('example#welcome');
  $r->websocket('/news')->to(cb => sub {
    my $self = shift;
    $self->on(message => sub {
      my ($self, $msg) = @_;
      $msg = decode_json($msg);
      if ($msg->{type} eq 'ready'){
        my ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime();
        my $headline = 'Bingo at 5 today!';
        my $description = 'This hmessage is really long and demonstrates the scrolling ability of the banner text. Go to Bingo at 5PM tonight in the cafeteria! Dinner is at 7PM tonight, meatloaf will be served.';
        my $expiration = 30;
        my $hash = md5_hex($headline . $description . $expiration);
        my $message = {headline => $headline, message => $description, expiration => $expiration, messagehash => $hash};
          $self->send({json => $message});
      }
      elsif ($msg->{type} eq 'close') {
        $self->session(closed => $msg->{messagehash});
      }
    });
  });
  
  $r->get('/tenant/:file')->to(cb => sub {
    my $c = shift;
    my $file = $c->param('file');
    my $tenant = $c->session->{tenant};
    if ( $file eq 'css' ) {
      $c->reply->static($tenant && -e $c->app->home->rel_file("public/tenants/$tenant-style.css") ? "tenants/$tenant-style.css" : "tenants/style.css");
    } elsif ( $file eq 'logo' ) {
      $c->reply->static($tenant && -e $c->app->home->rel_file("public/tenants/$tenant-logo.png") ? "tenants/$tenant-logo.png" : "tenants/logo.png");
    } elsif ( $file eq 'banner' ) {
      $c->reply->static($tenant && -e $c->app->home->rel_file("public/tenants/$tenant-banner.png") ? "tenants/$tenant-banner.png" : "tenants/banner.png");
    }
  });

  $r->any('/api/grid/:page')->to(cb => sub {
    my $c = shift;
    my $img = 'img/TwitterAppIcon.png';
    my $label = 'twitter';
    my $url = 'http://twitter.com';
    if ( $c->param('page') == 1 ) {
      $img = 'img/FacebookAppIcon.png';
      $label = 'facebook';
      $url = 'http://facebook.com';
    } elsif ( $c->param('page') == 2 ) {
      $img = 'img/YouTubeAppIcon.png';
      $label = 'youtube';
      $url = 'http://youtube.com';
    } elsif ( $c->param('page') == 3 ) {
      $img = 'img/SpotifyAppIcon.png';
      $label = 'spotify';
      $url = 'http://spotify.com';
    }
    $c->render_jsonp([
      {"col"=>1,"row"=>1,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>3,"row"=>2,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>2,"row"=>3,"size_x"=>2,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>3,"row"=>1,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>5,"row"=>2,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>4,"row"=>3,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>6,"row"=>1,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>1,"row"=>3,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>9,"row"=>3,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>7,"row"=>1,"size_x"=>2,"size_y"=>2,img=>$img,label=>$label,url=>$url},
      {"col"=>6,"row"=>2,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>7,"row"=>3,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>9,"row"=>1,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>4,"row"=>2,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>6,"row"=>3,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>5,"row"=>1,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>1,"row"=>2,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>5,"row"=>3,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>4,"row"=>1,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>2,"row"=>2,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>8,"row"=>3,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>2,"row"=>1,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>9,"row"=>2,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url},
      {"col"=>1,"row"=>4,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label,url=>$url}
    ]);
  });

  $r->get('/:tenant', {tenant => ''})->to(cb => sub {
    my $c = shift;
    $c->session(tenant => $c->param('tenant') || 'keystone-technologies') if $c->param('tenant') || !$c->session('tenant');
    $c->stash(tenant => $c->session('tenant'));
    $c->redirect_to('/') if $c->param('tenant');
  })->name('index');
}

1;
