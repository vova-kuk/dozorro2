
describe('LOGIN', () => {
    before(() => {
        browser.url('https://mail.google.com/mail/u/0/#inbox');
        browser.pause(3000);
    });

    it("", () => {
        browser.$(`//input[@type='email']`).setValue('testtestovich2007@gmail.com');
        browser.$(`//span[@class='RveJvd snByac']`).click();
        browser.pause(3000);
        browser.$(`//input[@type='password']`).setValue('test7777');
        browser.$(`//span[@class='RveJvd snByac']`).click();
        browser.pause(3000);
        browser.$(`//span[contains(text(),'Dozorro.org')]`).click();
        browser.pause(30000);
    })

});