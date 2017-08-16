var Sumup = function() {};

/*var CountryError = function(code, message) {
  this.code = code || null;
  this.message = message || '';
};*/

Sumup.prototype.pay = function (success, failure, amount, currencycode, email, tel) {
  cordova.exec(success, failure, 'Sumup', 'pay', [amount, currencycode, email, tel]);
};

if (!window.plugins) {
  window.plugins = {};
}
if (!window.plugins.sumup) {
  window.plugins.sumup = new Sumup();
}

if (module.exports) {
  module.exports = Sumup;
}
