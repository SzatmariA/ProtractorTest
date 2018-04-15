'use strict'

import {expect} from '../steps/BaseStep.js';
import {SearchPage} from '../pages/SearchPage.js';

let searchPage = new SearchPage();

export class SearchResultStep {
	constructor() {}

	
	waiter() {
		searchPage.waitForElement();
	}
	clickOnNYC(){
		searchPage.clickOnNYC();
	}

	CheckResult(Text) {
		let title = searchPage.CheckResult();
		expect(title).to.eventually.equal("'220 5TH AVENUE EXTENSION RTE 30");
	}

	
}