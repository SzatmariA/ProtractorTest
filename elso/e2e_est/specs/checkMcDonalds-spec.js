'use strict'

import {MainPage} from '../pages/MainPage.js';
import {MainStep} from '../steps/MainStep.js';
import {BurgersStep} from '../steps/BurgersStep.js';
import {DetailsStep} from '../steps/DetailsStep.js';


describe('Basic tests for angular', () => {
    let mainPage;
    let mainStep;
    let burgersStep;
    let detailsStep;
    beforeAll(() =>{
        mainPage = new MainPage();
        mainStep = new MainStep();
        burgersStep = new BurgersStep();
        detailsStep = new DetailsStep();
        mainPage.openPage();
    });
    afterAll(() => {
         browser.close(); 
    }); 
	
	it('Open Mcdonalds page and check it', () => {
		mainStep.iCanSeeTheMcDonaldsPageIsOpened();
	});
	
	it('Click on Our Menu button', ()=> {
		browser.sleep(5000);
		mainStep.clickOnOurMenu();
	});
	it('Click on Burgers button', ()=> {
		//browser.sleep(5000);
		mainStep.clickOnBurgers();
	});
	
	it('Check if the Burger page is displayed', () => {
		mainStep.iCanSeeTheBurgersPageIsOpened();
	});

	it('Click on Learn more button', ()=> {
		browser.executeScript('window.scrollTo(500,0);').then(function () {
		burgersStep.clickOnLearnMore();
		})
		//browser.sleep(5000);
		
	});
	it('Check if the page is loaded ', () => {
		burgersStep.theResultPageIsVisible();
	});
	
	
    

});