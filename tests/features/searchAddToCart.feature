Feature: Product search and add to cart functionality

  @SearchAddToCart
  Scenario Outline: Search product and add to cart successfully
    Given user is on the homepage "https://automationteststore.com/"
    When user searches for "<product>"
    And user selects a product from search results
    And user adds the product to the cart
    Then product should be added successfully
    When user navigates to the cart page
    Then cart should contain product

  Examples:
    | product  |
    | perfume  |
    | shampoo |
    | cream    |