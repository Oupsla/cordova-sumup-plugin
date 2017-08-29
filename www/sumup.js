cordova.define("cordova-plugin-sumup.Sumup", function(require, exports, module) {
var Sumup = function() {};

/*var CountryError = function(code, message) {
  this.code = code || null;
  this.message = message || '';
};*/

Sumup.prototype.pay = function (success, failure, amount, currencycode, email, tel) {
  cordova.exec(success, failure, 'Sumup', 'pay', [amount, currencycode, email, tel]);
};

Sumup.prototype.payWithToken = function (success, failure, amount, currencycode, email, tel, token) {
  cordova.exec(success, failure, 'Sumup', 'payWithToken', [amount, currencycode, email, tel, token]);
};

Sumup.prototype.login = function (success, failure) {
  cordova.exec(success, failure, 'Sumup', 'login', []);
};

Sumup.prototype.logout = function (success, failure) {
  cordova.exec(success, failure, 'Sumup', 'logout', []);
};

Sumup.prototype.settings = function (success, failure) {
  cordova.exec(success, failure, 'Sumup', 'settings', []);
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

});
