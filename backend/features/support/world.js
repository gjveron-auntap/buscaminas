// Dependencies
const { setWorldConstructor } = require('cucumber');
var zombie = require('zombie');
function World() {
  this.browser = new zombie(); // this.browser will be available in step definitions

  this.visit = function (url, callback) {
    this.browser.visit(url, callback);
  };
}

setWorldConstructor(World);