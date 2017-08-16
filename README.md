# cordova-sumup-plugin
Cordova plugin for native acces to the sumup paiement system

This plugin permit interconnection beetween native sumUp SDK and hybrid mobile app (cordova/phonegap).

<b>Compatibility :</b>
- ANDROID

Pull requests are welcome to integrate IOS !

<b>Installation</b>

<pre>
$ cordova plugin add https://github.com/Oupsla/cordova-sumup-plugin.git --variable SUMUP_API_KEY=YOUR_AFFILIATION_KEY
</pre>

You can your affiliation key here : https://me.sumup.com/developers
You have to add your cordova package in the 'Application identifiers'

<b>JS CODE</b>

<pre>

  plugins.sumup.pay(
    function(res) {
      /*
      res : {
          code // result code from sumup, more info here : https://github.com/sumup/sumup-android-sdk#1-response-fields
          message // message from sumup
          txcode // transaction code from sumup
        }
      */
    },
    function(error) {

    }, amount, currency (ex : 'EUR'), customerEmail, customerPhone);
    
</pre>
