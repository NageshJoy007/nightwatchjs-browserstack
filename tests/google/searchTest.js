var data = require("../../testdata/data.json");
module.exports = {
  
  '@tags':['searchTest','smoke','all'],
  
  'Step 1: Navigation to Google' : function (client) {
    client
      .url(data.url)
      .waitForElementVisible('body', 5000)
      .assert.title(data.homeTitle)
      .assert.visible('input[type=text]') 
    },
 
  'Step 2: Search for a key word' : function (client) {
      client
      .setValue('input[type=text]', data.searchString)
      .waitForElementVisible('input[name=btnK]', 5000)
      .click('input[name=btnK]')
      .pause(1000)
      .assert.title(data.searchTitle)
      .end();
  }
};