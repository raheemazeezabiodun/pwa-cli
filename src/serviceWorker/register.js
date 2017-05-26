// add service worker to index page
(function() {
    'use strict';

    if (!('serviceWorker' in navigator)) {
        console.log('Service worker not supported');
        return;
    }
    navigator.serviceWorker.register('index.js')
        .then(function(registration) {
            console.log('Registered at scope:', registration.scope);
        })
        .catch(function(error) {
            console.log('Registration failed:', error);
        });

})();
