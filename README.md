# nightwatch-browserstack


### Waht is Nightwatch ?

[Nightwatch](https://nightwatchjs.org/) is an automated testing framework for web applications and websites, written in Node.js and using the W3C WebDriver API (formerly Selenium WebDriver. It is a complete browser (End-to-End) testing solution which aims to simplify the process of setting up Continuous Integration and writing automated tests.

<img src ="http://nightwatchjs.org/img/logo-nightwatch.png" height = "110">

### What is BrowserStack ?

[BrowserStack](https://www.browserstack.com/) is a cloud web and mobile testing platform that enables developers to test their websites and mobile applications across on-demand browsers, operating systems and real mobile devices, without requiring users to install or maintain an internal lab of virtual machines, devices or emulators.

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)


This is a sample nightwatch project to run your functional tests programmatically on your local and also on cloud platform using BrowserStack.

### Setup 

* Install node via `brew install node` Or download [Node.js](https://nodejs.org/en/download/)

* Do  `git clone https://github.com/NageshJoy007/nightwatch-browserstack.git`

* To download required node_modules specified in [package.json](./package.json)  `npm install`

### Run

Go into project folder and run below commands:

1) To run tests using scripts in package.json

   `nightwatch -e chrome --reporter html-reporter.js`

2) You can pass different nightwatch configurations/test settings to your tests run time from cli

   `nightwatch -c ./conf/local.conf.js -e chrome --reporter html-reporter.js`

8) To run your tests using BrowserStack - Nightwatch Integration with BrowserStack

    * Get your browserstack account license for automation

    * Export the environment variables for the Username and Access Key of your BrowserStack account
            
        ```
        export BROWSERSTACK_USERNAME=<browserstack-username> &&
        export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
        ```
        
    * Or Update `browserstack.conf.js.conf.js` files inside the `conf/` directory with your `browserstack-username` and `browserstack-access-key`.


   `nightwatch -c ./conf/browserstack.conf.js -e chrome --reporter html-reporter.js`  Or   `npm run test-bs-chrome`

### Output

    * Reports will generate under tests_output folder.

