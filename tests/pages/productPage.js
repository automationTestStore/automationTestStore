const { expect } = require("@playwright/test");
const { setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(30 * 1000); // 30 seconds

// ProductPage - Page Object Model for the product listing and shopping cart interactions
class ProductPage {
  // Initialize ProductPage with page object and product-related locators
  constructor(page) {
    this.page = page;

    // Search functionality locators
    this.searchBox = page.locator("#filter_keyword");
    this.searchBtn = page.locator(".button-in-search");

    // Product display and cart action locators
    this.sortDropdown = page.locator("#sort");
    this.productCards = page.locator(".productcart");
    this.addToCartBTN = page.locator('[class="fa fa-cart-plus fa-fw"]');

    // Shopping cart navigation locator
    this.cartIcon = page.locator('//span[text()="Cart"]');
  }

  // Searches for a product by filling the search box and waiting for results to load
  async searchProduct(product) {
    await this.searchBox.fill(product);
    await this.searchBtn.click();
    await this.page.waitForSelector(".productcart");
  }

  // Sorts products by price from high to low and waits for the page to load
  async sortHighToLow() {
    await this.sortDropdown.selectOption({ label: "Price High > Low" });
    await this.page.waitForLoadState("networkidle");
  }

  // Clicks the first product and adds it to the cart
  async addFirstProductToCart() {
    await this.productCards.first().click();
    await this.addToCartBTN.click();
    await this.page.waitForLoadState("networkidle");
  }

  // Navigates to the shopping cart page by clicking the cart icon
  async goToCart() {
    await this.cartIcon.first().click();
  }

  // Verifies that the current page is the checkout or cart page
  async verifyCartPage() {
    await expect(this.page).toHaveURL(/checkout|cart/);
  }
}

module.exports = { ProductPage };
