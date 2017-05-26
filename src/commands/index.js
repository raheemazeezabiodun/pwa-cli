import chalk from 'chalk';
import figlet from 'figlet';
import { readFile, writeFile, logSuccess, logError } from '../libs';


export function showPWA() {
    console.log(
        chalk.yellow(
            figlet.textSync('PWA-CLI', { horizontalLayout: 'full' })
        )
    );
}

export function serviceWorker() {
    // fetch page with service worker
    readFile('./src/serviceWorker/register.js')
        .then(function (data) {
            const sw = `<script>\n ${data} </script>`;

            // read the html index page and add sw to it
            readFile('./index.html')
                .then(function (html) {
                    const result = html.replace(/\<\/body>/g, sw + '</body>');
                    writeFile('./index.html', result)
                        .then(function (data) {
                            logSuccess("1 - service worker registered successfully");
                        }).catch(function (error) {
                            logError(`1 - error cannot write to index.html, returned error ${error}`);
                    })
                }).catch(function (error) {
                logError(`1 - error cannot read index.html, returned error: ${error}`);
            })
        })
        .catch(function (error) {
            logError(`1 - error registering service worker - ${error}`);
        })
}

export function caching() {

}

export function pushNotification() {

}

export function homeScreen() {

}

export function migrate() {

}

