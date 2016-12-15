cordova.define("cordova-plugin-playfrequency.PlayFrequency", function(require, exports, module) {
var exec = require('cordova/exec');

exports.play = function(freq, samplerate) {
    exec(null, null, "CDVPlayFrequency", "playfrequency", [freq, samplerate]);
};

exports.stop = function(){
  exec(null, null, "CDVPlayFrequency", "stopfrequency", []);
}

});
