$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/AddCustomer.feature");
formatter.feature({
  "name": "Add Customer functionality",
  "description": "I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user should be in telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomer.user_should_be_in_telecom_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "add customer with valid data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user enters all fields.",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomer.user_enters_all_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be displayed the customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomer.user_should_be_displayed_the_customer_id_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user should be in telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomer.user_should_be_in_telecom_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "add customer with one dimensinal list",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user entering all the fields.",
  "rows": [
    {
      "cells": [
        "Pavi",
        "sekhar",
        "pavi@gmail.com",
        "chennai",
        "9840573386"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomer.user_entering_all_the_fields(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be displayed the customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomer.user_should_be_displayed_the_customer_id_is_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user should be in telecom home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomer.user_should_be_in_telecom_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "add customer with one dimensinal map",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user enters all the field",
  "rows": [
    {
      "cells": [
        "fname",
        "Pavi"
      ]
    },
    {
      "cells": [
        "lname",
        "sekhar"
      ]
    },
    {
      "cells": [
        "email",
        "pavi@gmail.com"
      ]
    },
    {
      "cells": [
        "address",
        "chennai"
      ]
    },
    {
      "cells": [
        "phno",
        "9840573386"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomer.user_enters_all_the_field(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be displayed the customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomer.user_should_be_displayed_the_customer_id_is_generated()"
});
formatter.result({
  "status": "skipped"
});
});