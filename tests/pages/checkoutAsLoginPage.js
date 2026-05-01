const { expect } = require("@playwright/test");

module.exports = class checkoutAsLoginPage {
  constructor(page) {
    this.page = page;
    this.loginOrRegisterButton = page.locator(
      "//a[text()='Login or register']",
    );
    this.loginNameInput = page.locator("#loginFrm_loginname");
    this.loginPasswordInput = page.locator("#loginFrm_password");
    this.loginButton = page.locator('//button[@title="Login"]');
    this.homePage = page.locator('//a[text()="Home"]');
    this.product = page.locator("//a[@data-id=80]");
    this.addToCart = page.locator('(//a[@href="#"])[1]');
    this.checkout = page.locator("#cart_checkout1");
    this.confirmButton = page.locator("#checkout_btn");
    this.sucessMessage = page.locator('//span[@class="maintext"]');
  }

  async launchUrl(url) {
    await this.page.goto(url);
  }
  async loginName(name) {
    await this.loginNameInput.fill(name);
  }
  async loginPassword(password) {
    await this.loginPasswordInput.fill(password);
  }
  async loginButtonSelection() {
    await this.loginButton.click();
  }
  async loginOrRegisterSelection() {
    await this.loginOrRegisterButton.click();
  }
  async homePageSelection() {
    await this.homePage.click();
  }
  async productSelection() {
    await this.product.click();
  }
  async addToCartSelection() {
    await this.addToCart.click();
  }
  async checkoutSelection() {
    await this.checkout.click();
  }
  async confirmButtonSelection() {
    await this.confirmButton.click({ timeout: 10000 });
  }
  async sucessMessageValidation() {
    await expect(this.sucessMessage).toContainText(
      "Your Order Has Been Processed!",
    );
  }
};
