'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showPWA = showPWA;
exports.serviceWorker = serviceWorker;
exports.caching = caching;
exports.pushNotification = pushNotification;
exports.homeScreen = homeScreen;
exports.migrate = migrate;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _figlet = require('figlet');

var _figlet2 = _interopRequireDefault(_figlet);

var _libs = require('../libs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showPWA() {
    console.log(_chalk2.default.yellow(_figlet2.default.textSync('PWA-CLI', { horizontalLayout: 'full' })));
}

function serviceWorker() {
    // fetch page with service worker
    (0, _libs.readFile)('./src/serviceWorker/register.js').then(function (data) {
        var sw = '<script>\n ' + data + ' </script>\n';

        // read the html index page and add sw to it
        (0, _libs.readFile)('./index.html').then(function (html) {
            var result = html.replace(/\<\/body>/g, sw + '</body>');
            (0, _libs.writeFile)('./index.html', result).then(function (data) {
                (0, _libs.logSuccess)("1 - service worker registered successfully");
            }).catch(function (error) {
                (0, _libs.logError)('1 - error cannot write to index.html, returned error ' + error);
            });
        }).catch(function (error) {
            (0, _libs.logError)('1 - error cannot read index.html, returned error: ' + error);
        });
    }).catch(function (error) {
        (0, _libs.logError)('1 - error registering service worker - ' + error);
    });
}

function caching() {}

function pushNotification() {}

function homeScreen() {
    (0, _libs.readFile)('./src/serviceWorker/manifest.json').then(function (data) {
        var hs = '<meta name="viewport" content="width=device-width, user-scalable=no" />\n                <link rel="manifest" href="manifest.json" />';
        (0, _libs.readFile)('./index.html').then(function (html) {
            var result = html.replace(/\<\/head>/g, hs + '</head>');
            (0, _libs.writeFile)('./index.html', result).then(function (data) {
                (0, _libs.logSuccess)("2-Home Screen Added successfully");
            }).catch(function (error) {
                (0, _libs.logError)('2- error cannot write to index.html, returned error ' + error);
            });
        }).catch(function (error) {
            (0, _libs.logError)('2- error cannot read index.html, returned error: ' + error);
        });
    }).catch(function (error) {
        (0, _libs.logError)(error);
    });
}

function migrate() {}