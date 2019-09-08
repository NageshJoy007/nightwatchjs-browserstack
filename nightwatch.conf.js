 module.exports ={
     
    src_folders : ["tests/google"],
    custom_commands_path : "",
    custom_assertions_path : "",
    page_objects_path : "",
    globals_path : "",
  
    webdriver : {
      start_process: true
    },
  
    test_settings : {
      default : {
        screenshots : {
            enabled : true,
            on_failure : true,
            on_error : false,
            path : "screenshots"
          },
          filter: ["tests/google"],  
        },
     chrome : {
        webdriver: {
          port: 9515,
          server_path: "node_modules/chromedriver/bin/chromedriver",
          cli_args: ["--verbose"]
        },
        desiredCapabilities : {
          browserName : "chrome",
          loggingPrefs: {"driver": "INFO", "server": "OFF", "browser": "INFO"}
        }
      },

      chromehl : {
        webdriver: {
          port: 9515,
          server_path: "node_modules/chromedriver/bin/chromedriver",
          cli_args: ["--verbose","--headless","--no-sandbox"]
        },
        desiredCapabilities : {
          browserName : "chrome",
          loggingPrefs: {"driver": "INFO", "server": "OFF", "browser": "INFO"}
        }
      },

      firefox: {
        webdriver: {
          server_path: 'node_modules/geckodriver/bin/geckodriver'
        },
        desiredCapabilities : {
          browserName : 'firefox',
          alwaysMatch: { acceptInsecureCerts: true }
        }
  }

      

    }

 } 