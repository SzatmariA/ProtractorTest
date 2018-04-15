'use strict'


import {expect} from '../steps/BaseStep.js';
import {MainPage} from '../pages/MainPage.js';
let mainPage = new MainPage();

export class MainStep  {
	constructor() {
		}

	iCanSeeTheMcDonaldsPageIsOpened() {
		let title = mainPage.checkThePageisOpened();
		expect(title).to.eventually.equal("McDonald's: Burgers, Fries & More. Quality Ingredients.");
		mainPage.clickTheX();
	}
	
	iCanSeeTheBurgersPageIsOpened() {
		let title = mainPage.checkThePageisOpened();
		expect(title).to.eventually.equal("McDonald’s Burgers: Hamburgers & Cheeseburgers | McDonald’s");
	}
	
	clickOnSearchButton(){
		mainPage.clickOnSearchButton();
	}
	
	writeInSearch(Text){
		mainPage.enterTheText(Text);
	}

	iCanSeeTheFollowingText(text) {
		let logo = mainPage.getLogo();
		expect(logo).to.eventually.equal(text);
	}

	clickOnOurMenu() {
		mainPage.clickOnOurMenu();
	}
	clickOnBurgers() {
		mainPage.clickOnBurgers();
	}

	
}
