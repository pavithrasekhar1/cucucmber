package org.resource;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.reusablemethods.BaseClass;


public class HomePage extends BaseClass{
public HomePage() {
	PageFactory.initElements(driver, this);
}
@FindBy(xpath="(//a[text()='Add Customer'])[1]")
	private WebElement addCustomer;

public WebElement getAddCustomer() {
	return addCustomer;
}
}