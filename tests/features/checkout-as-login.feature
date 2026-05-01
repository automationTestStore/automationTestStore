Feature: checkout as login
@checkoutAsUser
Scenario: place order using logged in user

Given Navigate to "https://automationteststore.com/index.php?rt=account/login"


And fill in Login Name "ajcrush"
And fill in Login Password "Muskan8987@"
And click on Login button
And click on Home
And click on product Acqua Di Gio Pour Homme
And click on Add to cart
And Click on Checkout
And Click on Confirm order

Then  Your Order Has Been Processed! should be visible