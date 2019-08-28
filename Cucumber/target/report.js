$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/AddCustomer.feature");
formatter.feature({
  "name": "Add Customer functionality",
  "description": "I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "add customer with one dimensinal map",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user enters all the fields...",
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
  "location": "AddCustomer.user_enters_all_the_fields(DataTable)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.stepdefenition.AddCustomer.user_enters_all_the_fields(AddCustomer.java:47)\r\n\tat ✽.user enters all the fields...(src/test/resources/Features/AddCustomer.feature:22)\r\n",
  "status": "failed"
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