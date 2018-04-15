
export class BurgersPage {
	constructor() { }

	waitForElement() {
		let until = protractor.ExpectedConditions;
		browser.wait(until.presenceOf(this.checkSearchResultPageIsAppeared()), 10000, 'Element taking too long to appear in the DOM');
	}
	
	clickOnLearnMore() {
		
		element(by.css('#\\34 > a > div > div > div > div')).click();
	}

	checkLearnMorePageIsAppeared() {
		 let pageElement = browser.getTitle();
		return pageElement;
	}

	
}
