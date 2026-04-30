const {
  Given,
  When,
  Then,
  BeforeAll,
  AfterAll,
  Before,
  After,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const { expect, chromium } = require("@playwright/test");
const { Register } = require("../pages/registerpage");

setDefaultTimeout(60 * 1000);

Before(async function () {
  this.register = new Register(this.page);
});

Given("navigate to register page {string}", async function (url) {
  await this.register.launchURL(url);
  await expect(this.page).toHaveURL(url);
});

When("click on Account button", async function () {
  await this.register.clickRegister();
  await expect(this.page).toHaveURL(/account\/login/);
});

When("click on Continue", async function () {
  await this.register.clickContinue();
  await expect(this.page.locator("h1")).toContainText("Create Account");
});

When("enter first_name {string}", async function (firstname) {
  await this.register.fillFirstName(firstname);
  await expect(this.register.firstNameTF).toHaveValue(firstname);
});

When("enter last_name {string}", async function (lastname) {
  await this.register.fillLastName(lastname);
  await expect(this.register.lastNameTF).toHaveValue(lastname);
});

When("enter Email {string}", async function (email) {
  await this.register.fillEmail(email);
  await expect(this.register.emailTF).toHaveValue(email);
});

When("enter Mobile {string}", async function (mobile) {
  await this.register.fillTelephone(mobile);
  await expect(this.register.telephoneTF).toHaveValue(mobile);
});

When("enter Fax {string}", async function (fax) {
  await this.register.fillFax(fax);
  await expect(this.register.faxTF).toHaveValue(fax);
});

When("enter company {string}", async function (company) {
  await this.register.fillCompany(company);
  await expect(this.register.companyTF).toHaveValue(company);
});

When("enter Address {int} {string}", async function (num, value) {
  if (num === 1) {
    await this.register.fillAddress1(value);
    await expect(this.register.address1TF).toHaveValue(value);
  } else {
    await this.register.fillAddress2(value);
    await expect(this.register.address2TF).toHaveValue(value);
  }
});

When("enter city {string}", async function (city) {
  await this.register.fillCity(city);
  await expect(this.register.cityTF).toHaveValue(city);
});

When("select Country {string}", async function (country) {
  await this.register.selectCountry(country);
  await expect(this.register.CountryOption).toHaveValue("99");
});

When("select State {string}", async function (state) {
  await this.register.selectState(state);
  await expect(this.register.stateOption).toHaveValue("1500");
});

When("enter Pincode {string}", async function (zip) {
  await this.register.fillZipcode(zip);
  await expect(this.register.zipcodeTF).toHaveValue(zip);
});

When("enter Login name {string}", async function (login) {
  await this.register.fillloginName(login);
  await expect(this.register.loginNameTF).toHaveValue(login);
});

When("enter Password {string}", async function (password) {
  await this.register.fillpassword(password);
  await expect(this.register.passwordTF).toHaveValue(password);
});

When("enter Password Confirm {string}", async function (confirm) {
  await this.register.fillconfirmpassword(confirm);
  await expect(this.register.confirmTF).toHaveValue(confirm);
});

When("select newsletter {string}", async function (value) {
  if (value.toLowerCase() === "yes") {
    await this.register.selectNewsletter();
    await expect(this.register.newsletter).toBeChecked();
  }
});

Then("click Privacy Policy", async function () {
  await this.register.selectPolicy();
  await expect(this.register.Policy).toBeChecked();
});

Then("click continue", async function () {
  await Promise.all([
    this.page.waitForLoadState("networkidle"),
    this.register.clickSubmit(),
  ]);
});

// Then("check {string}", async function (text) {
//     await expect(this.page.getByText(text)).toBeVisible()
// })
