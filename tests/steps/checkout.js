const { expect, chromium } = require("@playwright/test");
const { createBdd } = require("playwright-bdd");
const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const checkoutAsLoginPage = require("../pages/checkoutAsLoginPage.js");

setDefaultTimeout(50000);

Given("click on Login or Register", async function () {
  if (!this.checkout) {
    this.checkout = new checkoutAsLoginPage(this.page);
  }
  await this.checkout.loginOrRegisterSelection();
});

Given("fill in Login Name {string}", async function (name) {
  if (!this.checkout) {
    this.checkout = new checkoutAsLoginPage(this.page);
  }
  await this.checkout.loginName(name);
});

Given("fill in Login Password {string}", async function (password) {
  if (!this.checkout) {
    this.checkout = new checkoutAsLoginPage(this.page);
  }
  await this.checkout.loginPassword(password);
});
Given("click on Login button", async function () {
  if (!this.checkout) {
    this.checkout = new checkoutAsLoginPage(this.page);
  }
  await this.checkout.loginButtonSelection();
});

Given("click on Home", async function () {
  if (!this.checkout) {
    this.checkout = new checkoutAsLoginPage(this.page);
  }
  await this.checkout.homePageSelection();
});
Given("click on product Acqua Di Gio Pour Homme", async function () {
  if (!this.checkout) {
    this.checkout = new checkoutAsLoginPage(this.page);
  }
  await this.checkout.productSelection();
});

Given("click on Add to cart", async function () {
  if (!this.checkout) {
    this.checkout = new checkoutAsLoginPage(this.page);
  }
  await this.checkout.addToCartSelection();
});

Given("Click on Checkout", async function () {
  if (!this.checkout) {
    this.checkout = new checkoutAsLoginPage(this.page);
  }
  await this.checkout.checkoutSelection();
});

Given("Click on Confirm order", async function () {
  if (!this.checkout) {
    this.checkout = new checkoutAsLoginPage(this.page);
  }
  await this.checkout.confirmButtonSelection();
});

Then("Your Order Has Been Processed! should be visible", async function () {
  if (!this.checkout) {
    this.checkout = new checkoutAsLoginPage(this.page);
  }
  await this.checkout.sucessMessageValidation();
});
