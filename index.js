#!/usr/bin/env node
'use strict';

const program = require('commander');
const commands = require('./dist/commands');


program
    .version('1.0.0')
    .option('-m, --migrate', 'Migrate to pwa')
    .option('-s, --service-worker', 'Add service worker to your web app')
    .option('-c, --caching', 'Add caching to your web app')
    .option('-p, --push-notification', 'Add push notification to your web app')
    .option('-h, --home-screen', 'Add home screen to your web app')
    .parse(process.argv);

// execute commands

if (program.migrate) {
    commands.migrate()
}

else if (program.serviceWorker) {
    commands.sw()
}

else if (program.caching) {
    commands.caching()
}

else if (program.pushNotification) {
    commands.pushNotification()
}

else if (program.homeScreen) {
    commands.homeScreen()
}

else {
    commands.showPwa()
}
