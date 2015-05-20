package KeystoneConnect;
use Mojo::Base 'Mojolicious';

# This method will run once at server start
sub startup {
  my $self = shift;

  # Documentation browser under "/perldoc"
  $self->plugin('PODRenderer');
  $self->plugin(JSONP => callback => 'callback');
  
  # Router
  my $r = $self->routes;

  # Normal route to controller
  #$r->get('/')->to('example#welcome');
  $r->get('/')->to(cb => sub { shift->redirect_to('/index.html') });

  $r->get('/api/grid/:page')->to(cb => sub {
    my $c = shift;
    my $img = 'img/TwitterAppIcon.png';
    my $label = 'twitter';
    if ( $c->param('page') == 1 ) {
      $img = 'img/FacebookAppIcon.png';
      $label = 'facebook';
    } elsif ( $c->param('page') == 2 ) {
      $img = 'img/YouTubeAppIcon.png';
      $label = 'youtube';
    } elsif ( $c->param('page') == 3 ) {
      $img = 'img/SpotifyAppIcon.png';
      $label = 'spotify';
    }
    $c->render_jsonp([
      {"col"=>1,"row"=>1,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>3,"row"=>2,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>2,"row"=>3,"size_x"=>2,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>3,"row"=>1,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>5,"row"=>2,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>4,"row"=>3,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>6,"row"=>1,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>1,"row"=>3,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>9,"row"=>3,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>7,"row"=>1,"size_x"=>2,"size_y"=>2,img=>$img,label=>$label},
      {"col"=>6,"row"=>2,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>7,"row"=>3,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>9,"row"=>1,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>4,"row"=>2,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>6,"row"=>3,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>5,"row"=>1,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>1,"row"=>2,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>5,"row"=>3,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>4,"row"=>1,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>2,"row"=>2,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>8,"row"=>3,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>2,"row"=>1,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>9,"row"=>2,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label},
      {"col"=>1,"row"=>4,"size_x"=>1,"size_y"=>1,img=>$img,label=>$label}
    ]);
  });
}

1;
