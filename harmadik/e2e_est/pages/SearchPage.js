
export class SearchPage {
	constructor() { }

	waitForElement() {
		let until = protractor.ExpectedConditions;
		browser.wait(until.presenceOf(this.checkSearchResultPageIsAppeared()), 10000, 'Element taking too long to appear in the DOM');
	}
	
	clickOnNYC(){
	  //this one wasn't in the test cases DUDE
	  element(by.css('#restaurantLocatorDisambiguityModal > div > div > div.container-fluid > div:nth-child(2) > div > div:nth-child(1) > a')).click();
	  
  }
  
  CheckResult(){
	  return element(by.css('#restaurant-location-195500284613-en-us > div > div > div:nth-child(1) > div > h3')).getText();
	  
  }

	
}
