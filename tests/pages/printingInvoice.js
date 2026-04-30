class printingInvoice {
    constructor(page){
        this.page = page;
        this.usernameTF = page.locator("#loginFrm_loginname");
        this.passwordTF = page.locator("#loginFrm_password");
        this.loginBTN = page.locator('[title="Login"]');
        this.AccountBTN = page.locator('(//span[text() = "Account"])[1]');
        this.historyBTN = page.locator('(//a[@href="https://automationteststore.com/index.php?rt=account/history"])[2]');
        this.orderBTN = page.locator('#button_edit').first();
        this.printBTN = page.locator('//a[@title="Print"]');
    }

    async enterUsername(username){
        await this.usernameTF.fill(username);
    }

    async enterPassword(password){
        await this.passwordTF.fill(password);
    }

    async clickLogin(){
        await this.loginBTN.click();
    }


    async clickAccount(){
        await this.AccountBTN.click();
    }

    async clickOrderHistory(){
        await this.historyBTN.click();
    }

    async openFirstOrder(){
        await this.orderBTN.click();
    }

    async clickPrintInvoice(){
        await this.printBTN.click();
    }
}

module.exports = { printingInvoice }