Feature: Login
@login
Scenario: Login with valid credentials

Given Navigate to "https://automationteststore.com/index.php?rt=account/login"

When Enter login name "ajcrush"
And Enter Password "Muskan8987@"
And Click on login button

Then Login should be successful "My Account"