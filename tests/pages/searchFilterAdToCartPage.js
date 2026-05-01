const { expect } = require("@playwright/test");
const { setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(30 * 1000);

class ProductPage {
  constructor(page) {
    this.page = page;

    this.searchBox = page.locator("#filter_keyword");
    this.searchBtn = page.locator(".button-in-search");

    this.sortDropdown = page.locator("#sort");
    this.productCards = page.locator(".productcart");
    this.addToCartBTN = page.locator('[class="fa fa-cart-plus fa-fw"]');

    this.cartIcon = page.locator('//span[text()="Cart"]');
  }

  async searchProduct(product) {
    await this.searchBox.fill(product);
    await this.searchBtn.click();
    await this.page.waitForSelector(".productcart");
  }

  async sortHighToLow() {
    await this.sortDropdown.selectOption({ label: "Price High > Low" });
    await this.page.waitForLoadState("networkidle");
  }

  async addFirstProductToCart() {
    await this.productCards.first().click();
    await this.addToCartBTN.click();
    await this.page.waitForLoadState("networkidle");
  }

  async goToCart() {
    await this.cartIcon.first().click();
  }

  async verifyCartPage() {
    await expect(this.page).toHaveURL(/checkout|cart/);
  }
}

module.exports = { ProductPage };
