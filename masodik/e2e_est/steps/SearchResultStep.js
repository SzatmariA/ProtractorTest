'use strict'

import {expect} from '../steps/BaseStep.js';
import {SearchResultPage} from '../pages/SearchResultPage.js';

let searchResultPage = new SearchResultPage();

export class SearchResultStep {
	constructor() {}

	
	waiter() {
		searchResultPage.waitForElement();
	}
	clickOnSearch(){
		searchResultPage.clickOnSearch();
	}

	theResultPageIsVisible() {
		let title = searchResultPage.checkLearnMorePageIsAppeared();
		expect(title).to.eventually.equal("Search Results");
	}

	
}