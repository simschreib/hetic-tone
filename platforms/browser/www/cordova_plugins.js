cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.mbppower.camerapreview/www/CameraPreview.js",
        "id": "com.mbppower.camerapreview.CameraPreview",
        "pluginId": "com.mbppower.camerapreview",
        "clobbers": [
            "cordova.plugins.camerapreview"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/ionic-plugin-keyboard/www/browser/keyboard.js",
        "id": "ionic-plugin-keyboard.keyboard",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "file": "plugins/com.keith.cordova.plugin.canvascamera/www/CanvasCamera.js",
        "id": "com.keith.cordova.plugin.canvascamera.CanvasCamera",
        "pluginId": "com.keith.cordova.plugin.canvascamera",
        "clobbers": [
            "plugin.CanvasCamera",
            "CanvasCamera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-cameraserver/www/CameraServer.js",
        "id": "cordova-plugin-cameraserver.CameraServer",
        "pluginId": "cordova-plugin-cameraserver",
        "clobbers": [
            "cordova.plugins.CameraServer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.mbppower.camerapreview": "0.0.8",
    "cordova-plugin-console": "1.0.4",
    "cordova-plugin-device": "1.1.3",
    "cordova-plugin-splashscreen": "4.0.0",
    "cordova-plugin-statusbar": "2.2.0",
    "cordova-plugin-whitelist": "1.3.0",
    "ionic-plugin-keyboard": "2.2.1",
    "com.keith.cordova.plugin.canvascamera": "1.0.0dev",
    "cordova-plugin-cameraserver": "0.3.0"
}
// BOTTOM OF METADATA
});