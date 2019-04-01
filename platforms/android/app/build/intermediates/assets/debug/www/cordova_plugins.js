cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-badge.Badge",
    "file": "plugins/cordova-plugin-badge/www/badge.js",
    "pluginId": "cordova-plugin-badge",
    "clobbers": [
      "cordova.plugins.notification.badge"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
    "pluginId": "cordova-plugin-local-notification",
    "clobbers": [
      "cordova.plugins.notification.local"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification.Core",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification-core.js",
    "pluginId": "cordova-plugin-local-notification",
    "clobbers": [
      "cordova.plugins.notification.local.core",
      "plugin.notification.local.core"
    ]
  },
  {
    "id": "cordova-plugin-local-notification.LocalNotification.Util",
    "file": "plugins/cordova-plugin-local-notification/www/local-notification-util.js",
    "pluginId": "cordova-plugin-local-notification",
    "merges": [
      "cordova.plugins.notification.local.core",
      "plugin.notification.local.core"
    ]
  },
  {
    "id": "cordova-plugin-background-mode.BackgroundMode",
    "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
    "pluginId": "cordova-plugin-background-mode",
    "clobbers": [
      "cordova.plugins.backgroundMode",
      "plugin.backgroundMode"
    ]
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  },
  {
    "id": "cordova-plugin-service-worker.ServiceWorkerContainer",
    "file": "plugins/cordova-plugin-service-worker/www/service_worker_container.js",
    "pluginId": "cordova-plugin-service-worker",
    "clobbers": [
      "navigator.serviceWorker"
    ]
  },
  {
    "id": "cordova-plugin-service-worker.ServiceWorkerRegistration",
    "file": "plugins/cordova-plugin-service-worker/www/service_worker_registration.js",
    "pluginId": "cordova-plugin-service-worker",
    "clobbers": [
      "ServiceWorkerRegistration"
    ]
  },
  {
    "id": "cordova-plugin-service-worker.ServiceWorker",
    "file": "plugins/cordova-plugin-service-worker/www/service_worker.js",
    "pluginId": "cordova-plugin-service-worker",
    "clobbers": [
      "ServiceWorker"
    ]
  },
  {
    "id": "cordova-plugin-service-worker.kamino.js",
    "file": "plugins/cordova-plugin-service-worker/www/kamino.js",
    "pluginId": "cordova-plugin-service-worker",
    "clobbers": [
      "Kamino"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-badge": "0.8.8",
  "cordova-plugin-local-notification": "0.9.0-beta.2",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-background-mode": "0.7.2",
  "es6-promise-plugin": "4.2.2",
  "cordova-plugin-service-worker": "1.0.1",
  "cordova-plugin-statusbar": "2.4.2"
};
// BOTTOM OF METADATA
});