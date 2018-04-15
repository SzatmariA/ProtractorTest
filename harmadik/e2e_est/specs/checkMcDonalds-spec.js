'use strict'

import {MainPage} from '../pages/MainPage.js';
import {MainStep} from '../steps/MainStep.js';
import {SearchResultStep} from '../steps/SearchResultStep.js';



describe('Basic tests for angular', () => {
    let mainPage;
    let mainStep;
    let searchResultStep;
    
    beforeAll(() =>{
        mainPage = new MainPage();
        mainStep = new MainStep();
        searchResultStep = new SearchResultStep();
        mainPage.openPage();
    });
    afterAll(() => {
         browser.close(); 
    }); 
	
	it('Open Mcdonalds page and check it', () => {
		mainStep.iCanSeeTheMcDonaldsPageIsOpened();
	});
	
	it('Click on Locate button', ()=> {
		browser.sleep(5000);
		mainStep.clickOnLocate();
	});
	it('Write into Search field', ()=> {
		//browser.sleep(5000);
		mainStep.enterTheText("New York");
	});
	it('Click on Miles', ()=> {
		mainStep.clickonMiles();
	});
	it('Select 20', ()=> {
		mainStep.clickOn20();
	});
	it('Click on Show more', ()=> {
		mainStep.clickOnShowMore();
	});
	
	
	it('Click wifi ', () => {
		mainStep.checkWifiCheckBox();
	});
	
	it('Click mobile ordering ', () => {
		mainStep.checkMobileOrderingCheckBox();
	});
	
	it('Click indoor dining ', () => {
		mainStep.checkIndoorDiningCheckBox();
	});
	
	it('Check these b*tches ', () => {
		mainStep.checkIfTheyAreChecked();
	});
	
	it('Click on submit ', () => {
		mainStep.clickOnSubmit();
	});
	
	it('Click on NYC ', () => {
		searchResultStep.clickOnNYC();
		browser.sleep(5000);
	});
	
	it('Check the text ', () => {
		searchResultStep.CheckResult();
	});
	
	
	
	
	
	
	
	
	
	
	
    

});