Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('cart', {
    path: '/'
  });
});

if (Meteor.isCordova) {
  Meteor.startup(function () {
    cordova.plugins.barcodeScanner.scan(
      function (result) {
        alert("We got a barcode\n" +
          "Result: " + result.text + "\n" +
          "Format: " + result.format + "\n" +
          "Cancelled: " + result.cancelled);
      }, 
      function (error) {
        alert("Scanning failed: " + error);
      }
    );
  });
}
