const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameTF = page.locator("#loginFrm_loginname");

    this.passwordTF = page.locator("#loginFrm_password");

    this.loginBTN = page.locator('[title="Login"]');

    this.afterLoginName = page.locator(".subtext");
  }

  async launchURL(url) {
    await this.page.goto(url);
  }
  async enterUsername(username) {
    await expect(this.usernameTF).toBeVisible();
    await expect(this.usernameTF).toBeEditable();
    await this.usernameTF.fill(username);
  }

  async enterPassword(password) {
    await expect(this.passwordTF).toBeVisible();
    await expect(this.passwordTF).toBeEditable();
    await this.passwordTF.fill(password);
  }

  async clickLogin() {
    await expect(this.loginBTN).toBeVisible();
    await expect(this.loginBTN).toBeEnabled();
    await this.loginBTN.click();
  }

  async verifyLoginSuccess(name) {
    await expect(this.afterLoginName).toBeVisible();
    await expect(this.afterLoginName).toContainText(name);
  }
}

module.exports = { LoginPage };
