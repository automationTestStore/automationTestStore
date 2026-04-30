class CartPage {
  constructor(page) {
    this.page = page;

    // --- Locators ---
    this.cartLink = page.locator('//span[text()="Cart"]');
    this.unitPrice = page.locator('//td[@class="align_right"]');
    this.totalPrice = page.locator('//td[@class="align_right"]');

    this.quantityInput = page.locator('input[name*="quantity"]');
    this.updateBtn = page.locator('button[title="Update"]');

    this.removeBtn = page.locator('[class="fa fa-trash-o fa-fw"]'); // remove icon/button
    this.emptyMsg = page.locator(".contentpanel"); // empty cart message
  }

  // --- Navigation ---
  async goToCart() {
    await this.cartLink.first().click();
  }

  // --- Price ---
  async getUnitPrice() {
    const text = await this.unitPrice.first().textContent();
    return parseFloat(text.replace(/[^\d.]/g, ""));
  }

  async updateQuantity(qty) {
    await this.quantityInput.fill(qty.toString());
  }

  async clickUpdate() {
    await this.updateBtn.click();

    // wait for UI refresh
    await this.page.waitForTimeout(1000);
  }

  async getTotalPrice() {
    const text = await this.totalPrice.last().textContent();
    return parseFloat(text.replace(/[^\d.]/g, ""));
  }

  // --- Remove ---
  async removeItem() {
    await this.removeBtn.click();
  }

  async verifyCartEmpty() {
    await this.emptyMsg.waitFor({ state: "visible" });
  }
}

module.exports = { CartPage };
