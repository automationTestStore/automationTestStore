Feature: Add to Cart

@addtocart
Scenario: Add product to cart and complete checkout as a guest
  Given navigate to "https://automationteststore.com/"
  When click on a product on the home page
  And click on Add to Cart
  And click on Checkout in the shopping cart
  And select Guest Checkout and click Continue
  
  And enter first name "zako"
  And enter last name "mako"
  And enter email "zakomako@gmail.com"
  And enter telephone "9876543210"
  And enter fax "5550199"
  
  And enter company "abc"
  And enter address 1 "asdf"
  And enter address 2 "ghjk"
  And enter city "London"
  And select country "United Kingdom"
  And select region "Greater London"
  And enter zip code "123456"
  
  And click Continue on checkout details
  Then the Checkout Confirmation page should be displayed
  When click on Confirm Order
  Then the order should be successfully processed