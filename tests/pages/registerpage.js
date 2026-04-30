class Register{
    constructor(page){
        this.page = page
        this.RegisterBTN = page.locator('//a[text()="Login or register"]')
        this.continueBTN = page.locator(`(//button[@class="btn btn-orange pull-right"])[1]`)
        this.firstNameTF = page.locator("#AccountFrm_firstname")
        this.lastNameTF = page.locator("#AccountFrm_lastname")
        this.emailTF = page.locator("#AccountFrm_email")
        this.telephoneTF = page.locator("#AccountFrm_telephone")
        this.faxTF = page.locator("#AccountFrm_fax")
        this.companyTF = page.locator("#AccountFrm_company")
        this.address1TF = page.locator("#AccountFrm_address_1")
        this.address2TF = page.locator("#AccountFrm_address_2")
        this.cityTF = page.locator("#AccountFrm_city")
        this.zipcodeTF = page.locator("#AccountFrm_postcode")
        this.CountryOption = page.locator(`//select[@id="AccountFrm_country_id"]`)
        this.stateOption = page.locator(`//select[@id="AccountFrm_zone_id"]`)
        this.loginNameTF = page.locator(`#AccountFrm_loginname`)
        this.passwordTF = page.locator("#AccountFrm_password")
        this.confirmTF = page.locator("#AccountFrm_confirm")
        this.newsletter = page.locator("#AccountFrm_newsletter0")
        this.Policy = page.locator("#AccountFrm_agree")
        this.submitBTN = page.locator(`//button[@title="Continue"]`)
    }

   async launchURL(url){
    await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
}
    async clickRegister(){
        await this.RegisterBTN.click()
    }
    async clickContinue(){
        await this.continueBTN.click()
    }
    async fillFirstName(firstname){
        await this.firstNameTF.fill(firstname)
    }
    async fillLastName(lastname){
        await this.lastNameTF.fill(lastname)
    }
    async fillEmail(email){
        await this.emailTF.fill(email)
    }
    async fillTelephone(mobile){
        await this.telephoneTF.fill(mobile)
    }
    async fillFax(fax){
        await this.faxTF.fill(fax)
    }
    async fillCompany(company){
        await this.companyTF.fill(company)
    }
    async fillAddress1(address1){
        await this.address1TF.fill(address1)
    }
    async fillAddress2(address2){
        await this.address2TF.fill(address2)
    }
    async fillCity(city){
        await this.cityTF.fill(city)
    }
    async fillZipcode(zipcode){
        await this.zipcodeTF.fill(zipcode)
    }
    async selectCountry(country){
    await this.CountryOption.selectOption({ label: country })
}
    async selectState(state){
    await this.stateOption.selectOption({ label: state })
}
async fillloginName(loginname){
        await this.loginNameTF.fill(loginname)
    }
    async fillpassword(password){
        await this.passwordTF.fill(password)
    }
    async fillconfirmpassword(confirm){
        await this.confirmTF.fill(confirm)
    }
     async selectPolicy(){
        await this.Policy.click()
    }
    async selectNewsletter(){
        await this.newsletter.check()
    }

    async clickSubmit(){
        await this.submitBTN.click()
    }

}

module.exports={Register}