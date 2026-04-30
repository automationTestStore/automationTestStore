Feature: Add to Cart

@addtocart
Scenario: Add product to cart and complete checkout as a guest
  Given navigate to "https://automationteststore.com/"
  When click on a product on the home page
  And click on Add to Cart
  And click on Checkout in the shopping cart
  And select Guest Checkout and click Continue
  
  And enter guest first name "zako"
  And enter guest last name "mako"
  And enter guest email "zakomako@gmail.com"
  And enter guest telephone "9876543210"
  And enter guest fax "5550199"
  
  And enter guest company "abc"
  And enter guest address 1 "asdf"
  And enter guest address 2 "ghjk"
  And enter guest city "London"
  And select country "United Kingdom"
  And select region "Greater London"
  And enter zip code "123456"
  
  And click Continue on checkout details
  Then the Checkout Confirmation page should be displayed
  When click on Confirm Order
  Then the order should be successfully processed