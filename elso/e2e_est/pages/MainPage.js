
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
  
  clickTheX(){
	  element(by.css('#bs-example-navbar-collapse-1 > div.top-components.clearfix.hidden-xs > div.component-language-toggle.navbar-right > ul > li.dropdown.open > ul > a > i')).click();
  }

  getLogo() {
    let logo = element(by.css('.menu-item-text')).getText();
    return logo;
  }

  clickOnOurMenu() {
	//browser.manage().timeouts().implicitlyWait(10000);
	//element(by.css('.close')).click();
	element(by.cssContainingText('.dropdown-toggle', 'Our Menu')).click();
	
  }
  clickOnBurgers() {
	//browser.manage().timeouts().implicitlyWait(10000);
	//element(by.css('.close')).click();
	element(by.css('#mb1 > li.dropdown.menu-parent.open > ul > li > div > div > div.container-fluid.gutter > div > div.col-sm-5.col-md-5 > div > div > div:nth-child(1) > ul > li:nth-child(2) > a')).click();
	
  }
  
 
}
