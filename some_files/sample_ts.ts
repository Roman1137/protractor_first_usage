import {browser, by, element, ElementFinder, protractor} from "protractor";
let fs = require("fs");
let chaiHttp = require("chai-http");
let chai = require("chai");
chai.use(chaiHttp);

describe("some thing", () => {

    beforeEach(async () => {
        await browser.get("http://google.com")
    });

    it('should work', async () => {
        debugger;

        await expect(browser.getTitle()).toContain("Google");

        await element(by.css("[class='gLFyf gsfi']")).sendKeys("protractor");
        await browser.sleep(1000);

        let submitButtons : ElementFinder[] = await element.all(by.css("[name=btnK]"));
        let text : string = await submitButtons[0].getText();
        console.log(text);
        await submitButtons[0].click();

        let response = await chai.request('http://google.com').get('/');
        console.log(response.text);
    });
});


function writeScreenShot(data : string, filename : string) {
    var stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
}