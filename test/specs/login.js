import HomePage from "./../_page/HomePage";
import {h2HomePage} from "./../_data/homePage.data";

describe('LOGIN', () => {
  before(() => {
    browser.url('https://dev.dozorro.work/');
    HomePage.verifyElementText(HomePage.header, h2HomePage);
    browser.pause(3000);
    browser.$(`//a[@class='delete']`).click();
  });

  it("", () =>{
    browser.$(`//div[@class='login_link']//a`).click();
    browser.pause(3000);
    browser.$(`//a[@class='btn btn-block btn-social btn-google']`).click();
    browser.pause(1000);
    browser.$(`//input[@type='email']`).setValue('testtestovich2007@gmail.com');
    browser.$(`//span[@class='RveJvd snByac']`).click();
    browser.pause(3000);
    browser.$(`//input[@type='password']`).setValue('test7777');
    browser.$(`//span[@class='RveJvd snByac']`).click();
    browser.pause(3000);
    browser.$(`//button[@class='dropdown-toggle']`).click();
    browser.$(`//a[@href='https://dev.dozorro.work/user/notify']`).click();
    //browser.$(`//span[@class='tender-header__link4 is-outlined-button']`).click();
    browser.pause(1000);
  })
});

