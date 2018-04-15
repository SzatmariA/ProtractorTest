
export class SearchResultPage {
	constructor() { }

	waitForElement() {
		let until = protractor.ExpectedConditions;
		browser.wait(until.presenceOf(this.checkSearchResultPageIsAppeared()), 10000, 'Element taking too long to appear in the DOM');
	}
	
	clickOnSearch() { 
		//Ezt itt amugy miert kell, de srsly
		element(by.css('#maincontent > div:nth-child(1) > div > div > div.template.search-hero > div.hidden-xs.template-hero-bg > div > div > div > div > div.cont-hero.select-container.col-xs-12.col-sm-10.col-sm-offset-1 > form > div > div.col-xs-2.col-md-2.col-lg-2 > button')).click();
	}

	checkLearnMorePageIsAppeared() {
		 let pageElement = browser.getTitle();
		return pageElement;
	}

	
}
