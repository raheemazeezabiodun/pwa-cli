const chalk = require('chalk');
const figlet = require('figlet');


function showPWA() {
    console.log(
        chalk.yellow(
            figlet.textSync('PWA-CLI', { horizontalLayout: 'full' })
        )
    );
}

function serviceWorker() {

}

function caching() {

}

function pushNotification() {

}

function homeScreen() {

}

function migrate() {

}

module.exports = {
    showPwa: showPWA,
    sw: serviceWorker,
    caching: caching,
    pushNotification: pushNotification,
    homeScreen: homeScreen,
    migrate: migrate
};
