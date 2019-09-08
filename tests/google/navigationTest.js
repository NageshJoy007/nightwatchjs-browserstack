var data = require("../../testdata/data.json");
module.exports = {
    
  '@tags':['navigationTest','all'],

    'Navigation to Google' : function (client) {
      client
        .url(data.url)
        .waitForElementVisible('body', 1000)
        .assert.title(data.homeTitle)
        .end();
    }
  };