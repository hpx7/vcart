Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('cart', {path: '/'});
  this.route('scan');
  this.route('search');
});

Router.plugin('ensureSignedIn');

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
