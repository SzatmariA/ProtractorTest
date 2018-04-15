
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

  clickOnLocate() {
	//browser.manage().timeouts().implicitlyWait(10000);
	//element(by.css('.close')).click();
	element(by.css('#menu-locate')).click();
	
  }
  
  enterTheText(searchText) {
	  element(by.css('#mb1 > li.dropdown.hidden-xs.menu-parent.open > ul > li:nth-child(1) > div > div > div > form > div.row.text-center > div > div > div.col-sm-6.col-md-7 > div > input')).clear();
	  element(by.css('#mb1 > li.dropdown.hidden-xs.menu-parent.open > ul > li:nth-child(1) > div > div > div > form > div.row.text-center > div > div > div.col-sm-6.col-md-7 > div > input')).sendKeys(searchText);
	 // element(by.css('#mb1 > li.dropdown.hidden-xs.menu-parent.open > ul > li:nth-child(1) > div > div > div > form > div.row.text-center > div > div > div.col-sm-6.col-md-7 > div > input')).sendKeys(protractor.Key.ENTER);
	  
  }
  
  clickonMiles(){
	  element(by.css('#mb1 > li.dropdown.hidden-xs.menu-parent.open > ul > li:nth-child(1) > div > div > div > form > div.row.text-center > div > div > div.col-sm-6.col-md-7 > div > div > div')).click();
	  
  }
  
  clickOn20(){
	  element(by.css('#undefined__subject > ul > li:nth-child(3) > a > span.text.click-before-outline')).click();
  }
  
  clickOnShowMore() {
	  element(by.css('#mb1 > li.dropdown.hidden-xs.menu-parent.open > ul > li:nth-child(1) > div > div > div > form > div.row.cont-filters > div > ul > div > a')).click();
  }
  
  checkWifiCheckBox(){
	  element(by.css('#checkbox15_label')).click();
  }
  
  checkMobileOrderingCheckBox(){
	  element(by.css('#checkbox11_label')).click();
  }
  
  checkIndoorDiningCheckBox(){
	  element(by.css('#checkbox18_label')).click();
  }
  
  checkIfTheyAreChecked(){ //OMG this function name sounds so silly lol
	  //Wifi checkbox erteke
	  expect(element(by.css('#checkbox15')).isSelected()).to.eventually.be.true;
	  
	  //Mobile ordering checkbox erteke
	  expect(element(by.css('#checkbox11')).isSelected()).to.eventually.be.true;
	  
	  //Indoor Dining checkbox erteke
	  expect(element(by.css('#checkbox18')).isSelected()).to.eventually.be.true;
  }
  
  
  clickOnSubmit(){
	  element(by.css('#mb1 > li.dropdown.hidden-xs.menu-parent.open > ul > li:nth-child(1) > div > div > div > form > div.row.text-center > div > div > div.col-sm-6.col-md-5 > div > div:nth-child(1) > button')).click();
	  
  }
  
  
  
  
  
  
  
  
  
  
 
}
