package com.fb.stepdefenition;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageSteps {
	@Given("User is on facebook page")
	public void user_is_on_facebook_page() { 
	}

	@When("^User enters the deatils$")
	public void user_enters_the_deatils(DataTable data){
		List<String>e=data.asList();
		for(int i=0;i<e.size();i++) {
			System.out.println(e.get(i));
			
	}
	}

	@Then("^Verify url contains login_attempt$")
	public void verify_url_contains_login_attempt() {
	}


	

}
