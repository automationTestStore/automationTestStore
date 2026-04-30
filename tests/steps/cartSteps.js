const { When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { CartPage } = require("../pages/cartPage");

let cartPage;

// --- NAVIGATION ---
When("Go to cart", async function () {
  cartPage = new CartPage(this.page);
  await cartPage.goToCart();
});

// --- VALIDATION ---
Then("Cart page should be displayed", async function () {
  await expect(this.page).toHaveURL(/checkout\/cart/);
});

// --- PRICE FLOW ---
When("Capture unit price of product", async function () {
  this.unitPrice = await cartPage.getUnitPrice();
});

When("Update quantity to {string}", async function (qty) {
  this.qty = parseInt(qty);
  await cartPage.updateQuantity(qty);
});

When("Click on update cart", async function () {
  await cartPage.clickUpdate();
});

Then("Total price should be updated correctly", async function () {
  const expected = this.unitPrice * this.qty;
  const actual = await cartPage.getTotalPrice();

  expect(actual).toBe(expected);
});

// --- REMOVE FLOW ---
When("Remove product from cart", async function () {
  await cartPage.removeItem();
});

Then("Cart should be empty", async function () {
  await cartPage.verifyCartEmpty();
});
