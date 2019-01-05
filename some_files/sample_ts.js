"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
let fs = require("fs");
function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}
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
        let elements = await protractor_1.element.all(protractor_1.by.css("#center_col .srg"));
        //await browser.pause(50000);
        await protractor_1.browser.takeScreenshot()
            .then(png => {
            writeScreenShot(png, "someScreenShot.png");
        });
    });
});
//# sourceMappingURL=sample_ts.js.map