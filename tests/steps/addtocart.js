const { Given, When, Then, BeforeAll, Before, After, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect, chromium } = require('@playwright/test');
const { AddToCartPage } = require('../pages/addtocartpage');


setDefaultTimeout(60000);


let browser, context, page, addToCartPage;


BeforeAll(async () => {
    browser = await chromium.launch({ headless: false }); 
});

Before(async () => {
    context = await browser.newContext();
    page = await context.newPage();
});

After(async () => {
    await page.close();
    await context.close();
});

AfterAll(async () => {
    await browser.close();
});


Given("navigate to {string}", async (url) => {
    await page.goto(url);
});

When("click on a product on the home page", async () => {
    addToCartPage = new AddToCartPage(page);
    await addToCartPage.clickFirstProduct();
});

When("click on Add to Cart", async () => {
    await addToCartPage.clickAddToCart();
});

When("click on Checkout in the shopping cart", async () => {
    await addToCartPage.clickCartCheckout();
});

When("select Guest Checkout and click Continue", async () => {
    await addToCartPage.selectGuestCheckout();
});

When("enter first name {string}", async (firstName) => {
    await addToCartPage.firstNameInput.fill(firstName);
});

When("enter last name {string}", async (lastName) => {
    await addToCartPage.lastNameInput.fill(lastName);
});

When("enter email {string}", async (email) => {
    await addToCartPage.emailInput.fill(email);
});

When("enter telephone {string}", async (telephone) => {
    await addToCartPage.telephoneInput.fill(telephone);
});

When("enter fax {string}", async (fax) => {
    await addToCartPage.faxInput.fill(fax);
});

When("enter company {string}", async (company) => {
    await addToCartPage.companyInput.fill(company);
});

When("enter address 1 {string}", async (address1) => {
    await addToCartPage.address1Input.fill(address1);
});

When("enter address 2 {string}", async (address2) => {
    await addToCartPage.address2Input.fill(address2);
});

When("enter city {string}", async (city) => {
    await addToCartPage.cityInput.fill(city);
});

When("select country {string}", async (country) => {
    await addToCartPage.countryDropdown.selectOption({ label: country });
});

When("select region {string}", async (region) => {
    
    await page.waitForTimeout(2000); 
    await addToCartPage.regionDropdown.selectOption({ label: region });
});

When("enter zip code {string}", async (zipCode) => {
    await addToCartPage.zipInput.fill(zipCode);
});

When("click Continue on checkout details", async () => {
    await addToCartPage.clickGuestContinue();
});

Then("the Checkout Confirmation page should be displayed", async () => {
    await expect(addToCartPage.pageHeading).toContainText("Checkout Confirmation", { ignoreCase: true });
});

When("click on Confirm Order", async () => {
    await addToCartPage.clickConfirmOrder();
});

Then("the order should be successfully processed", async () => {
    await expect(addToCartPage.pageHeading).toContainText("Your Order Has Been Processed!", { ignoreCase: true });
});