// Import ProductPage class for page object interactions
const { ProductPage } = require("../pages/productPage");
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

// Initialize ProductPage for each test scenario
Before(async function () {
  this.productPg = new ProductPage(this.page);
});

// When step - Search for a product by name
When("Search for product {string}", async function (product) {
  await this.productPg.searchProduct(product);
});

// When step - Sort products by price from high to low
When("Sort products from high to low", async function () {
  await this.productPg.sortHighToLow();
});

// When step - Add the first product from search results to the cart
When("Add first product to cart", async function () {
  await this.productPg.addFirstProductToCart();
});

// When step - Navigate to the shopping cart
When("Go to cart from product page", async function () {
  await this.productPg.goToCart();
});

// Then step - Verify that the cart page has been successfully displayed
Then("Product cart page should be displayed", async function () {
  await this.productPg.verifyCartPage();
});
