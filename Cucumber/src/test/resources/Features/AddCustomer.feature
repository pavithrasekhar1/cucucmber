
Feature: Add Customer functionality
I want to use this template for my feature file

#Background: 
#Given user should be in telecom home page
# user click on add customer button


  #Scenario: add customer with valid data
  #When user enters all fields.
  #And user click on submit button
  #Then user should be displayed the customer id is generated
  
 # Scenario: add customer with one dimensinal list
  #When user enters all the fields..
  #|Pavi|sekhar|pavi@gmail.com|chennai|9840573386|
  #And user click on submit button
 # Then user should be displayed the customer id is generated
  
  Scenario: add customer with one dimensinal map
  When user enters all the fields...
  |fname   |   Pavi       |
  |lname   |   sekhar     |
  |email   |pavi@gmail.com|
  |address |chennai       |
  |phno    |9840573386    |
  And user click on submit button
  Then user should be displayed the customer id is generated
  
    