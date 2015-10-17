Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('scan', {
    path: '/scan'
  });

  this.route('cart', {
    path: '/'
  });

  this.route('search', {
    path: '/search'
  });
});
