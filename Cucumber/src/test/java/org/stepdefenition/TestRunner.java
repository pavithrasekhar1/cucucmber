package org.stepdefenition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/test/resources/Features/AddCustomer.feature"},
                 glue= {"org.stepdefenition"},
                 plugin= {"html:target","rerun:src/test/resources/failed.txt"},
                 monochrome=true,
                 dryRun=true)
                 
                 

public class TestRunner {


}
