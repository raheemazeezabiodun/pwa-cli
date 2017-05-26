import fs from 'fs';
import chalk from 'chalk';

export function readFile (name) {
    return new Promise(function (resolve, reject) {
        fs.readFile(name, 'utf8', function (error, data) {
            if(error) reject(error);
            resolve(data);
        })
    })
}

export function writeFile(name, data) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(name, data, 'utf8', function (error, data) {
            if (error) reject(error);
            resolve(data);
        })
    })
}

export function logSuccess(message) {
    console.log(chalk.green(message));
}

export function logError(message) {
    console.log(chalk.red(message))
}
