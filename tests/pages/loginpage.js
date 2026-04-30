const { expect } = require("@playwright/test");

// LoginPage - Page Object Model for the login page that encapsulates all login interactions
class LoginPage {
  // Constructor - Initializes the LoginPage with page object and locators

  constructor(page) {
    this.page = page;

    // Locator for the username text field
    this.usernameTF = page.locator("#loginFrm_loginname");
    // Locator for the password text field
    this.passwordTF = page.locator("#loginFrm_password");
    // Locator for the Login button
    this.loginBTN = page.locator('[title="Login"]');

    // Locator for the welcome message displayed after successful login
    this.afterLoginName = page.locator(".subtext");
  }

  // Navigates to the specified URL
  async launchURL(url) {
    await this.page.goto(url);
  }

  // Enters the username into the username field after verifying visibility and editability
  async enterUsername(username) {
    await expect(this.usernameTF).toBeVisible();
    await expect(this.usernameTF).toBeEditable();
    await this.usernameTF.fill(username);
  }

  // Enters the password into the password field after verifying visibility and editability
  async enterPassword(password) {
    await expect(this.passwordTF).toBeVisible();
    await expect(this.passwordTF).toBeEditable();
    await this.passwordTF.fill(password);
  }

  // Clicks the Login button after verifying visibility and enabled state
  async clickLogin() {
    await expect(this.loginBTN).toBeVisible();
    await expect(this.loginBTN).toBeEnabled();
    await this.loginBTN.click();
  }

  // Verifies successful login by checking the welcome message contains the expected username
  async verifyLoginSuccess(name) {
    await expect(this.afterLoginName).toBeVisible();
    await expect(this.afterLoginName).toContainText(name);
  }
}

// Export the LoginPage class for use in test step definitions
module.exports = { LoginPage };
