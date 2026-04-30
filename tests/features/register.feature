Feature: Register

@Registration
Scenario: Registeration
Given navigate to "https://automationteststore.com/"

When click on Account button
When click on Continue
When enter first_name "Naman"
When enter last_name "M"
When enter Email "abcDE1FG@gmail.com"
When enter Mobile "7854612375"
When enter Fax "247564"
When enter company "Frustrated Tester"
When enter Address 1 "Chandigarh University"
When enter Address 2 "Gharuan"
When enter city "Panipat"   
When select Country "India"
When select State "Punjab"
When enter Pincode "132103"
When enter Login name "nmiglani1210"
When enter Password "Abc@1234"
When enter Password Confirm "Abc@1234"
When select newsletter "no"

Then click Privacy Policy 
Then click continue
# Then check "Your Account Has Been Created!"