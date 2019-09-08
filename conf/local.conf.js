nightwatch_config = {
    src_folders : [ "tests/google" ],
  
    webdriver : {
      "start_process": true
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

      chrome : {
            webdriver: {
              server_path: "node_modules/chromedriver/bin/chromedriver",
              port: 9515,
              cli_args: [ "--verbose"]
            },
            desiredCapabilities : {
              browserName : "chrome",
              loggingPrefs: {"driver": "INFO", "server": "OFF", "browser": "INFO"}
            }
      },
      
      firefox: {
            webdriver: {
              server_path: 'node_modules/.bin/geckodriver'
            },
            desiredCapabilities : {
              browserName : 'firefox',
              alwaysMatch: { acceptInsecureCerts: true }
            }
      }


    }
  };
  
  module.exports = nightwatch_config;
  