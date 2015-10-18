Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('scan');

  this.route('cart', {
    path: '/'
  });

  this.route('search');
});
