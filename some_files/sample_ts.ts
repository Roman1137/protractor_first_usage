import {browser, by, element, protractor} from "protractor";
let fs =require("fs");

function writeScreenShot(data : string, filename : string) {
    var stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

describe("some thing", () => {
    beforeEach(async () => {
        await browser.get("http://google.com")
    });

    it('should work', async () => {
        debugger;
        await expect(browser.getTitle()).toContain("Google");

        await element(by.css("[class='gLFyf gsfi']")).sendKeys("protractor");
        await browser.sleep(1000);

        let submitButtons = await element.all(by.css("[name=btnK]"));
        let text = await submitButtons[0].getText();
        console.log(text);
        await submitButtons[0].click();

        let elements = await element.all(by.css("#center_col .srg"));

        //await browser.pause(50000);
        await browser.takeScreenshot()
            .then(png => {
                writeScreenShot(png, "someScreenShot.png")
            });
    });
});