package org.test;

import org.testng.annotations.Test;

public class Sample {
	@Test(priority=-10)
		private void test1() {
	}
		@Test(priority=4)
			private void test2() {
		}
			@Test(priority=-8)
				private void test3() {
			}
}
