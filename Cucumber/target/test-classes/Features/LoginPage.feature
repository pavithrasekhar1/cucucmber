Feature: Validate the facebook Site

Scenario: Validate login details
Given User is on facebook page
When User enters the deatils
|Hello|Java|
Then Verify url contains login_attempt