// Dependencies
const { After, Before, AfterAll } = require('cucumber');

Before(async () => {
    // Just like inside step definitions, "this" is set to a World instance.
    // It's actually the same instance the current scenario step definitions
    // will receive.

    // Let's say we have a bunch of "maintenance" methods available on our World
    // instance, we can fire some to prepare the application for the next
    // scenario:

    // start the app
    
    //require('../../bin/www');
    //cb();
});

After(async () => {
  
});

AfterAll(async () => {
});

