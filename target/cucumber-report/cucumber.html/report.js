$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "User want to login into saucedemo website",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 8090308300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Should Login Successfully With Valid Credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter username \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify the text \"Products\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 280058300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userEnterUsername(String)"
});
formatter.result({
  "duration": 273595500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userEnterPassword(String)"
});
formatter.result({
  "duration": 115718700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 185357100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 29700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Products",
      "offset": 17
    }
  ],
  "location": "LoginSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 113622700,
  "status": "passed"
});
formatter.after({
  "duration": 901421400,
  "status": "passed"
});
formatter.uri("product.feature");
formatter.feature({
  "line": 2,
  "name": "Verify Test",
  "description": "",
  "id": "verify-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5569378500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "verify That Six Products Are Displayed On Page",
  "description": "",
  "id": "verify-test;verify-that-six-products-are-displayed-on-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter username \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Six products should displayed on page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 48200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userEnterUsername(String)"
});
formatter.result({
  "duration": 247781600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userEnterPassword(String)"
});
formatter.result({
  "duration": 116481900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 199691800,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.sixProductsShouldDisplayedOnPage()"
});
formatter.result({
  "duration": 77290800,
  "status": "passed"
});
formatter.after({
  "duration": 864424600,
  "status": "passed"
});
});