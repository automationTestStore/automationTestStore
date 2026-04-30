const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { AddToCartPage } = require("../pages/addtocartpage");

setDefaultTimeout(60000);

Given("navigate to {string}", async function (url) {
  await this.page.goto(url);
});

When("click on a product on the home page", async function () {
  this.addToCartPage = new AddToCartPage(this.page);
  await this.addToCartPage.clickFirstProduct();
});

When("click on Add to Cart", async function () {
  await this.addToCartPage.clickAddToCart();
});

When("click on Checkout in the shopping cart", async function () {
  await this.addToCartPage.clickCartCheckout();
});

When("select Guest Checkout and click Continue", async function () {
  await this.addToCartPage.selectGuestCheckout();
});

When("enter first name {string}", async function (firstName) {
  await this.addToCartPage.firstNameInput.fill(firstName);
});

When("enter last name {string}", async function (lastName) {
  await this.addToCartPage.lastNameInput.fill(lastName);
});

When("enter email {string}", async function (email) {
  await this.addToCartPage.emailInput.fill(email);
});

When("enter telephone {string}", async function (telephone) {
  await this.addToCartPage.telephoneInput.fill(telephone);
});

When("enter fax {string}", async function (fax) {
  await this.addToCartPage.faxInput.fill(fax);
});

When("enter company {string}", async function (company) {
  await this.addToCartPage.companyInput.fill(company);
});

When("enter address 1 {string}", async function (address1) {
  await this.addToCartPage.address1Input.fill(address1);
});

When("enter address 2 {string}", async function (address2) {
  await this.addToCartPage.address2Input.fill(address2);
});

When("enter city {string}", async function (city) {
  await this.addToCartPage.cityInput.fill(city);
});

When("select country {string}", async function (country) {
  await this.addToCartPage.countryDropdown.selectOption({ label: country });
});

When("select region {string}", async function (region) {
  await this.page.waitForTimeout(2000);
  await this.addToCartPage.regionDropdown.selectOption({ label: region });
});

When("enter zip code {string}", async function (zipCode) {
  await this.addToCartPage.zipInput.fill(zipCode);
});

When("click Continue on checkout details", async function () {
  await this.addToCartPage.clickGuestContinue();
});

Then("the Checkout Confirmation page should be displayed", async function () {
  await expect(this.addToCartPage.pageHeading).toContainText(
    "Checkout Confirmation",
    { ignoreCase: true },
  );
});

When("click on Confirm Order", async function () {
  await this.addToCartPage.clickConfirmOrder();
});

Then("the order should be successfully processed", async function () {
  await expect(this.addToCartPage.pageHeading).toContainText(
    "Your Order Has Been Processed!",
    { ignoreCase: true },
  );
});
