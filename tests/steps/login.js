// Import LoginPage class for page object interactions
const { LoginPage } = require("../pages/loginpage");
// Import Cucumber hooks and step definitions
const {
  Given,
  When,
  Then,
  Before,
  After,
  BeforeAll,
  AfterAll,
} = require("@cucumber/cucumber");
// Import Playwright test utilities
const { expect, chromium } = require("@playwright/test");

// Browser instance used across all test scenarios
let browser;

// Initialize the browser before all tests
BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
});

// // Create a new browser context and page for each test scenario
// Before(async function () {
//   this.context = await browser.newContext();
//   this.page = await this.context.newPage();

//   this.loginPg = new LoginPage(this.page);
// });

// Close the browser context after each test scenario
After(async function () {
  await this.context.close();
});

// Close the browser after all tests complete
AfterAll(async () => {
  await browser.close();
});

// Given step - Navigate to the specified URL
Given("Navigate to {string}", async function (url) {
  await this.loginPg.launchURL(url);
});

// When step - Enter the login username
When("Enter login name {string}", async function (username) {
  await this.loginPg.enterUsername(username);
});

// When step - Enter the login password
When("Enter Password {string}", async function (password) {
  await this.loginPg.enterPassword(password);
});

// When step - Click the login button
When("Click on login button", async function () {
  await this.loginPg.clickLogin();
});

// Then step - Validate the login was successful by verifying the expected username appears
Then("Validate login outcome {string}", async function (expected) {
//   await expect(this.loginPg.afterLoginName).toBeVisible();
//   await expect(this.loginPg.afterLoginName).toContainText(expected);
});
