'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readFile = readFile;
exports.writeFile = writeFile;
exports.logSuccess = logSuccess;
exports.logError = logError;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readFile(name) {
    return new Promise(function (resolve, reject) {
        _fs2.default.readFile(name, 'utf8', function (error, data) {
            if (error) reject(error);
            resolve(data);
        });
    });
}

function writeFile(name, data) {
    return new Promise(function (resolve, reject) {
        _fs2.default.writeFile(name, data, 'utf8', function (error, data) {
            if (error) reject(error);
            resolve(data);
        });
    });
}

function logSuccess(message) {
    console.log(_chalk2.default.green(message));
}

function logError(message) {
    console.log(_chalk2.default.red(message));
}