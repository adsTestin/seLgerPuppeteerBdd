Good practices to write your scenarios:

They are 2 ways to write your examples: imperative VS declarative style. With
imperative style, scenarios tend to be long with very low level steps that drive the
user interface. When using the declarative style of Gherkin syntax, scenarios
describes the what, not the how. We strongly recommend the declarative style as
they are focused on the business rules.

Ex: Given I am logged in

We don’t care about how we did the login (with a username and password or
touchId Facebook login…). The thing that matters from a business stand point is
that I’am logged in! Detail of the login procedure will be pushed into the step
definitions when automating the scenario.

You’ll see that this approach of writing of scenarios will make them shorter and
using a consistent business terminology.

# Test steps

Look at the `features/specs_definitions/*.feature` files in the project to see the available test steps.  
You can run them all with:

```bash
npm start
```

# Test Glue

Look at the `features/steps/*.js` files in the project to see the available Given Then When test steps.

# Puppeteer code and other

Look at the `features/support/*.js` files in the project to see the available functions.

# Unit Test of the Framework

Look at the `test/*` files in the project to see the available unit Test with htmls.

Configuration and hooks are loaded from `/features/support/config.js` features/support/config.js. You can override behaviour with the following environment variables:

```bash
ENV              # Appended to screenshot names (default: '')
REPORT_PATH      # Path where Axe accessibility reports will be saved (default: './test/reports')
ROOT_URL         # Prepended to URLs that don't start with 'http' (default: '')
SCREENSHOT_PATH  # Path to save screenshots (default: './test/screenshots'
```

# Puppeteer launch options

You can customize #puppeteerlaunchoptions by adding a `puppeteerOptions` object to your package.json:

```javascript
// package.json
"puppeteerOptions" : {
    "headless": false,
    "sloMo": 250,
    "defaultViewport": {
        "width": 1000,
        "height": 1000
    }
}

```

Or by using the Cucumber.js [`--world-parameters`](https://github.com/cucumber/cucumber-js/blob/master/docs/cli.md#world-parameters) command line arg:

```javascript
// package.json
"scripts": {
    "test:headful": "npx cucumber-js --world-parameters \"{\\\"headless\\\": false}\""
}
```

:warning: Note that `--world-parameters` will take precedence.

# Unit tests

```bash
npm test         # after running `npm run test-server`
```
