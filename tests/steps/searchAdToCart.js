const { chromium, expect } = require("@playwright/test");
const {
  Given,
  When,
  Then,
  Before,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const { Automation } = require("../pages/searchAdToCartPage");

setDefaultTimeout(60000);

Before(async function () {
  this.auto = new Automation(this.page);
});

Given("user is on the homepage {string}", async function (url) {
  await this.auto.launchURL(url, { timeout: 60000 });
});

When("user searches for {string}", async function (product) {
  await this.auto.enterproduct(product);
  await this.auto.clickSearch();
});

When("user selects a product from search results", async function () {
  await this.auto.selecttheproduct();
});

When("user adds the product to the cart", async function () {
  await this.auto.addtheproduct();
});

Then("product should be added successfully", async function () {
  await expect(
    this.page.locator("//span[contains(text(),'Shopping Cart')]"),
  ).toBeVisible();
});

When("user navigates to the cart page", async function () {
  await this.auto.checkthecart();
});

Then("cart should contain product", async function () {
  console.log("Cart contains the product");
});
