Feature: End to End Cart Flow

@cart
Scenario: Login, add product, update quantity, verify price and remove product

  Given Navigate to "https://automationteststore.com/index.php?rt=account/login"

  When Enter login name "ajcrush"
  And Enter Password "Muskan8987@"
  And Click on login button

  Then Validate login outcome "Mohit"
  And Go to cart

  Then Cart page should be displayed

  When Capture unit price of product
  And Update quantity to "2"
  And Click on update cart

  Then Total price should be updated correctly

  When Remove product from cart

  Then Cart should be empty