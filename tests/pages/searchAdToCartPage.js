class Automation {
  constructor(page) {
    this.page = page;
    this.searchbar = page.locator("//input[@id='filter_keyword']");
    this.selectproduct = page.locator(
      "(//a[contains(@class,'prdocutname')])[1]",
    );
    this.addToCart = page.locator("//a[@class='cart']");
    this.cartbutton = page.locator("(//a[contains(@href,'cart')])[1]");
    //this.cartProduct = page.locator("(//td[@class='align_left']/a)[1]");
  }

  async launchURL(url) {
    await this.page.goto(url);
  }

  async enterproduct(productname) {
    await this.searchbar.fill(productname);
  }

  async clickSearch() {
    await this.page.keyboard.press("Enter");
  }

  async selecttheproduct() {
    await this.selectproduct.click({ timeout: 60000 });
  }

  async addtheproduct() {
    await this.addToCart.click();
  }

  async checkthecart() {
    await this.cartbutton.click();
  }
}

module.exports = { Automation };
