Feature: Login

@login
Scenario Outline: Login validation

  Given Navigate to "https://automationteststore.com/index.php?rt=account/login"

  When Enter login name "<username>"
  And Enter Password "<password>"
  And Click on login button

  Then Validate login outcome "<expected>"

Examples:
  | username  | password      | expected                           |
  | ajcrush   | Muskan8987@   | Mohit                             |
  | wronguser | wrongpass     | Error: Incorrect login or password |