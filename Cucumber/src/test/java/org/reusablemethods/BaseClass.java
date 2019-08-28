package org.reusablemethods;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseClass {
	public static WebDriver driver;
	public static void loadUrl(String url) {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\admin\\eclipse-workspace\\Cucumber\\driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get(url);
	}
	public static void type(WebElement element,String name) {
		element.sendKeys(name);
	}
	public static void button(WebElement element) {
		element.click();
	}
		

}
