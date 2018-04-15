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
	
	clickOnLocate(){
		mainPage.clickOnLocate();
	}
	
	enterTheText(Text){
		mainPage.enterTheText(Text);
	}
	
	clickonMiles(){
		mainPage.clickonMiles();
	}
	clickOn20(){
		mainPage.clickOn20();
	}
	
	clickOnShowMore(){
		mainPage.clickOnShowMore();
	}
	
	checkWifiCheckBox(){
		mainPage.checkWifiCheckBox();
	}
	
	checkMobileOrderingCheckBox(){
		mainPage.checkMobileOrderingCheckBox();
	}
	
	checkIndoorDiningCheckBox(){
		mainPage.checkIndoorDiningCheckBox();
	}
	
	checkIfTheyAreChecked(){
		mainPage.checkIfTheyAreChecked();
	}
	
	clickOnSubmit(){
		mainPage.clickOnSubmit();
	}

	
}
