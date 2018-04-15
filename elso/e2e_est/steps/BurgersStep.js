'use strict'

import {expect} from '../steps/BaseStep.js';
import {BurgersPage} from '../pages/BurgersPage.js';

let burgersPage = new BurgersPage();

export class BurgersStep {
	constructor() {}

	
	waiter() {
		burgersPage.waitForElement();
	}
	clickOnLearnMore(){
		burgersPage.clickOnLearnMore();
	}

	theResultPageIsVisible() {
		let title = burgersPage.checkLearnMorePageIsAppeared();
		expect(title).to.eventually.equal("Big Mac®: 100% Beef Burger with Special Sauce | McDonald's");
	}

	
}