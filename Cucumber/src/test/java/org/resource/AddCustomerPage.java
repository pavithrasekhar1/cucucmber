package org.resource;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.reusablemethods.BaseClass;

public class AddCustomerPage extends BaseClass{
	
	public  AddCustomerPage() {
		PageFactory.initElements(driver, this);
		
	}
@FindBy(xpath="//label[text()='Done']")
private WebElement donebutton;

@FindBy(id="fname")
private WebElement fname;

@FindBy(id="lname")
private WebElement lname;

@FindBy(id="email")
private WebElement email;

public WebElement getDonebutton() {
	return donebutton;
}

public WebElement getFname() {
	return fname;
}

public WebElement getLname() {
	return lname;
}

public WebElement getEmail() {
	return email;
}

public WebElement getAddress() {
	return address;
}

public WebElement getPhno() {
	return phno;
}

public WebElement getSubmitbutton() {
	return submitbutton;
}
@FindBy(name="addr")
private WebElement address;

@FindBy(id="telephoneno")
private WebElement phno;

@FindBy(xpath="(//input[@type='submit'])[1]")
private WebElement submitbutton;
}

