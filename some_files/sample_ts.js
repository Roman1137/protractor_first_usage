"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
let fs = require("fs");
let chaiHttp = require("chai-http");
let chai = require("chai");
chai.use(chaiHttp);
describe("some thing", () => {
    beforeEach(async () => {
        await protractor_1.browser.get("http://google.com");
    });
    it('should work', async () => {
        debugger;
        await expect(protractor_1.browser.getTitle()).toContain("Google");
        await protractor_1.element(protractor_1.by.css("[class='gLFyf gsfi']")).sendKeys("protractor");
        await protractor_1.browser.sleep(1000);
        let submitButtons = await protractor_1.element.all(protractor_1.by.css("[name=btnK]"));
        let text = await submitButtons[0].getText();
        console.log(text);
        await submitButtons[0].click();
        let response = await chai.request('http://google.com').get('/');
        console.log(response.text);
    });
});
function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}
//# sourceMappingURL=sample_ts.js.map