
export class MainPage {
  constructor() { }
  
  openPage() {
    browser.get('https://www.mcdonalds.com/us/en-us.html');
    browser.driver.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(10000);
    browser.waitForAngular();
  }

  checkThePageisOpened() {
    let pageElement = browser.getTitle();
    return pageElement;
  }

  getLogo() {
    let logo = element(by.css('.menu-item-text')).getText();
    return logo;
  }
   clickTheX(){
	  element(by.css('#bs-example-navbar-collapse-1 > div.top-components.clearfix.hidden-xs > div.component-language-toggle.navbar-right > ul > li.dropdown.open > ul > a > i')).click();
  }

  clickOnSearchButton() {
	//browser.manage().timeouts().implicitlyWait(10000);
	//element(by.css('.close')).click();
	element(by.css('#last-target-search > a')).click();
	
  }
  
  enterTheText(searchText) {
	  element(by.css('#last-target-search > ul > li:nth-child(1) > div > form > div > div.col-xs-10.padleft > div > input')).clear();
	  element(by.css('#last-target-search > ul > li:nth-child(1) > div > form > div > div.col-xs-10.padleft > div > input')).sendKeys(searchText);
	  element(by.css('#last-target-search > ul > li:nth-child(1) > div > form > div > div.col-xs-10.padleft > div > input')).sendKeys(protractor.Key.ENTER);
	  
  }
  
  
 
}
