Feature: Invoice

@Printing_Invoice
Scenario: Print Invoice 
Given navigate to "https://automationteststore.com/index.php?rt=account/login"
And Order should be placed

When Enter login_name "ajcrush"
When Enter password "Muskan8987@"
When Click on login_button
When Click on "Account"
When Click on "Order History"
When Click on "View" for first Order

Then Click on Print


