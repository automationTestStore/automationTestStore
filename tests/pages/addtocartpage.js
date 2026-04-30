
const { expect } = require('@playwright/test');

class AddToCartPage {
    constructor(page) {
        this.page = page;

        // --- EXISTING LOCATORS (Untouched) ---
        this.firstProduct = page.locator('.prdocutname').first(); 
        this.addToCartBtn = page.locator('.cart');
        this.cartCheckoutBtn = page.locator('#cart_checkout1');
        
        this.guestCheckoutRadio = page.locator('#accountFrm_accountguest');
        this.accountContinueBtn = page.locator('#accountFrm button[title="Continue"]');

        this.firstNameInput = page.locator('#guestFrm_firstname');
        this.lastNameInput = page.locator('#guestFrm_lastname');
        this.emailInput = page.locator('#guestFrm_email');
        this.telephoneInput = page.locator('#guestFrm_telephone');
        this.faxInput = page.locator('#guestFrm_fax');
        this.companyInput = page.locator('#guestFrm_company');
        this.address1Input = page.locator('#guestFrm_address_1');
        this.address2Input = page.locator('#guestFrm_address_2');
        this.cityInput = page.locator('#guestFrm_city');
        this.countryDropdown = page.locator('#guestFrm_country_id');
        this.regionDropdown = page.locator('#guestFrm_zone_id');
        this.zipInput = page.locator('#guestFrm_postcode');
        this.guestContinueBtn = page.locator('button[title="Continue"]');

        this.pageHeading = page.locator('.maintext'); 
        this.confirmOrderBtn = page.locator('#checkout_btn');
    }

    

    async clickFirstProduct() {
        await this.firstProduct.click();
    }

    async clickAddToCart() {
        await this.addToCartBtn.click();
    }

    async clickCartCheckout() {
        await this.cartCheckoutBtn.click();
    }

    async selectGuestCheckout() {
        await this.guestCheckoutRadio.check();
        await this.accountContinueBtn.click();
    }

    async fillPersonalDetails(firstName, lastName, email, phone, fax) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.telephoneInput.fill(phone);
        await this.faxInput.fill(fax);
    }

    async fillAddressDetails(company, address1, address2, city, zip) {
        await this.companyInput.fill(company);
        await this.address1Input.fill(address1);
        await this.address2Input.fill(address2);
        await this.cityInput.fill(city);
        await this.zipInput.fill(zip);
    }

    async selectCountry(countryLabel) {
        await this.countryDropdown.selectOption({ label: countryLabel });
    }

    async selectRegion(regionLabel) {
        await this.regionDropdown.selectOption({ label: regionLabel });
    }

    async clickGuestContinue() {
        await this.guestContinueBtn.click();
    }

    async clickConfirmOrder() {
        await this.confirmOrderBtn.click();
    }

    
    async assertPageHeadingContains(expectedText) {
        await expect(this.pageHeading).toContainText(expectedText, { ignoreCase: true });
    }

    
    async assertGuestCheckoutIsSelected() {
        await expect(this.guestCheckoutRadio).toBeChecked();
    }

    
    async assertConfirmOrderButtonIsVisible() {
        await expect(this.confirmOrderBtn).toBeVisible();
    }
}

module.exports = { AddToCartPage };