Feature: End to End Shopping

@e2e
Scenario: Login and add product to cart

  Given Navigate to "https://automationteststore.com/index.php?rt=account/login"

  When Enter login name "ajcrush"
  And Enter Password "Muskan8987@"
  And Click on login button

  Then Validate login outcome "Mohit"

  When Search for product "shirt"
  And Sort products from high to low
  And Add first product to cart
  And Go to cart

  Then Cart page should be displayed