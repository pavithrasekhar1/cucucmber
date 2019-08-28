
Feature: Add Customer functionality
I want to use this template for my feature file

Background: 
Given user should be in telecom home page
 And user click on add customer button

  Scenario: add customer with valid data
  When user enters all fields.
  And user click on submit button
  Then user should be displayed the customer id is generated
  
  #Scenario: add customer with one dimensinal list
 #When user entering all the fields.
 # | Pavi | sekhar | pavi@gmail.com | chennai | 9840573386 |
  #And user click on esubmit button
 #Then user should be displayed the customer id is generated
  
  #Scenario: add customer with one dimensinal map
  #When user enters all the field
  #|fname   |   Pavi       |
  #|lname   |   sekhar     |
  #|email   |pavi@gmail.com|
  #|address |chennai       |
  #|phno    |9840573386    |
  #And user click on submit button
  #Then user should be displayed the customer id is generated
  
  #Scenario Outline: 
  #When user entered all the fields"<fname>","<lname>","<email>","<address>","<phno>"
  #And user click on submit button
  #Then user should be displayed the customer id is generated
 # Examples:
  
 # |fname    | lname   |    email       |address | phno          |
  #|java     | rajan   |pavi@gmail.com  |chennai | 3245337745    |
  #|testing  | sekhar  |buvi@gmail.com  |trichi  | 6556576778    |
  #|iunit    | kumar   |yamu@gmail.com  |vellor  | 5446757688    |
  #|cucumber | mahi    |mahi@gmail.com  |tanjor  | 6556576778    |
  #|sql      | dhoni   |dhoni@gmail.com |chennai | 5446757688    |
  
  
  
  
    