require("dotenv").config();
const { defineConfig } = require("cypress");
const get2FACode = require("./cypress/plugins/emailReader");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  responseTimeout: 50000,
  e2e: {
    baseUrl: "https://coreloops-v2-350156031212.europe-west2.run.app",
    env: {
      env: "qa",
      email: process.env.CYPRESS_EMAIL,
    },
    setupNodeEvents(on) {
      on("task", {
        get2FACode,
      });
    },
  },
});
