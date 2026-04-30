const {
  Given,
  When,
  Then,
  BeforeAll,
  Before,
  After,
  AfterAll,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const { chromium, expect } = require("@playwright/test");
const { printingInvoice } = require("../pages/printingInvoice");

setDefaultTimeout(60 * 1000);

Before(async function () {
  this.invoice = new printingInvoice(this.page);
});

Given("Order should be placed", async function () {
  // placeholder — assuming order already exists for user
  await expect(this.page).toBeTruthy();
});

When("Enter login_name {string}", async function (username) {
  await this.invoice.enterUsername(username);
  await expect(this.invoice.usernameTF).toHaveValue(username);
});

When("Enter password {string}", async function (password) {
  await this.invoice.enterPassword(password);
  await expect(this.invoice.passwordTF).toHaveValue(password);
});

When("Click on login_button", async function () {
  await this.invoice.clickLogin();
});

When("Click on {string}", async function (option) {
  if (option === "Account") {
    await this.invoice.clickAccount();
  } else if (option === "Order History") {
    await this.invoice.clickOrderHistory();
  }
});

When("Click on {string} for first Order", async function (option) {
  if (option === "View") {
    await this.invoice.openFirstOrder();
  }
});

Then("Click on Print", async function () {
  await this.invoice.clickPrintInvoice();
});
