package KeystoneConnect;
use Mojo::Base 'Mojolicious';

use File::Basename 'basename';
use Digest::MD5 qw(md5_hex);
use Mojo::JSON qw(decode_json);

sub lookup_tenant { shift }

# This method will run once at server start
sub startup {
  my $self = shift;

  $self->secrets(['new_passw0rd', 'old_passw0rd', 'very_old_passw0rd']);
  $self->sessions->cookie_name('mysession');
  $self->sessions->default_expiration(60*60*24*365);

  $self->hook(before_routes => sub {
    my $c = shift;
    my $host = $c->req->url->to_abs->host;
    if ( $host =~ /keystoneconnect\.me$/ ) {
      $c->session(tenant => ((split /\./, $host)[0]));
    } elsif ( $host =~ /(\.c9\.io|localhost|kit.cm)/ ) {
      $c->session(tenant => 'keystone-technologies') unless $c->session('tenant');
    } else {
      $c->session(tenant => lookup_tenant($host));
    }
  });

  $self->plugin(JSONP => callback => 'callback');
  
  # Router
  my $r = $self->routes;

  $r->websocket('/news')->to(cb => sub {
    my $self = shift;
    $self->on(message => sub {
      my ($self, $msg) = @_;
      $msg = decode_json($msg);
      if ($msg->{type} eq 'ready'){
        my $headline = 'Bingo at 5 today!';
        my $description = 'This hmessage is really long and demonstrates the scrolling ability of the banner text. Go to Bingo at 5PM tonight in the cafeteria! Dinner is at 7PM tonight, meatloaf will be served.';
        my $expiration = 30;
        $self->send({json => {
          headline => $headline,
          message => $description,
          expiration => $expiration,
          messagehash => md5_hex($headline . $description . $expiration),
        }});
      }
      elsif ($msg->{type} eq 'close') {
        $self->session(closed => $msg->{messagehash});
      }
    });
  });
  
  $r->get('/img/icons/:file')->to(cb => sub {
    my $c = shift;
    $c->res->headers->cache_control('max-age=86400');
    my $file = $c->param('file');
    $file = ((glob($c->app->home->rel_file("public/img/icons/$file.*")))[0]);
    $file = basename $file if $file;
    $file = $file ? "img/icons/$file" : "img/icons.png";
    $c->res->headers->etag('"abc"');
    $c->res->headers->expires(Mojo::Date->new(time+186400)->to_string);
    $c->reply->static($file);
  });

  $r->get('/:type/#file', [type => [qw/img css/]])->to(cb => sub {
    my $c = shift;
    $c->res->headers->cache_control('max-age=1, no-cache');
    my $file = $c->param('file');
    my $type = join '.', $c->param('type'), ((reverse split(/\./, $file))[0]);
    my $tenant = $c->session('tenant');
    $c->app->log->info("Want: ".$c->app->home->rel_file("public/tenants/$tenant/$file").", fallback: tenants/$type");
    $c->reply->static($tenant && -e $c->app->home->rel_file("public/tenants/$tenant/$file") ? "tenants/$tenant/$file" : "tenants/$type");
  });

  # Temporary for development
  $r->get('/tenant/:tenant', [tenant => qr/(keystone-technologies\d*|westernhome\d*)/])->to(cb => sub {
    my $c = shift;
    $c->res->headers->cache_control('max-age=1, no-cache');
    $c->session(tenant => $c->param('tenant'));
    $c->redirect_to('/');
  });

  $r->get('/')->to(cb => sub {
    my $c = shift;
    $c->res->headers->cache_control('max-age=1, no-cache');
    $c->stash(tenant => $c->session('tenant'));
  })->name('index');
}

1;
