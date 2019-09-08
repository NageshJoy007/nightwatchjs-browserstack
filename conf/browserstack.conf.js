nightwatch_config = {
  src_folders : [ "tests/google" ],

  selenium : {
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 80
  },

  common_capabilities: {
    'browserstack.user': process.env.BROWSERSTACK_USERNAME ||'ReplaceWith_BROWSERSTACK_USERNAME',
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'ReplaceWith_BROWSERSTACK_ACCESS_KEY',
    'name': 'functional tests'
  },

  test_settings: {
    
    default: {
      screenshots : {
        enabled : true,
        on_failure : true,
        on_error : false,
        path : "screenshots"
      },
    },
    
    chrome: {
      desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        browser: 'Chrome',
        browser_version: '72.0',
        resolution: '1024x768'
      }
    },
    
    firefox: {
      desiredCapabilities: {
        os: 'OS X',
        os_version: 'High Sierra',
        browser: "firefox",
        browser_version: '68.0',
        resolution: '1024x768'
      }
    },
  }
};

// Code to support common capabilites
for(var i in nightwatch_config.test_settings){
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
  config['desiredCapabilities'] = config['desiredCapabilities'] || {};
  for(var j in nightwatch_config.common_capabilities){
    config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
  }
}

module.exports = nightwatch_config;