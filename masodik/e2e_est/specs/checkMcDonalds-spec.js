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
	
	it('Click on SearchButton', ()=> {
		browser.sleep(5000);
		mainStep.clickOnSearchButton();
	});
	it('Write into Search field', ()=> {
		//browser.sleep(5000);
		mainStep.writeInSearch("Burger");
	});
	it('Click on search button again, but why tho', ()=> {
		searchResultStep.clickOnSearch();
	});
	
	it('Check if the page is loaded ', () => {
		searchResultStep.theResultPageIsVisible();
	});
	
	
	
	
	
    

});