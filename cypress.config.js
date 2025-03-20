const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    video: true,
    experimentalWebKitSupport: true,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/e2e/reports/mochawesome",
      overwrite: false,
      html: false,
      json: true,
      setupNodeEvents(on, config) {
        // implement node event listeners here
        on("task", {
          log(message) {
            console.log(message);
            return null;
          },
        });
      },
    }
  }
})

