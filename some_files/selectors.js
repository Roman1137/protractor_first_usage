"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
let EC = protractor_1.protractor.ExpectedConditions;
describe("async actions", () => {
    beforeEach(async () => {
        await protractor_1.browser.get("https://www.seleniumhq.org/");
    });
    it('should seach for elements', async () => {
        debugger;
        let elementByText = protractor_1.element(protractor_1.by.buttonText("edit this page"));
        let elementByCssWithText = protractor_1.element(protractor_1.by.cssContainingText("div [href='/download/']", 'Download Selenium'));
        let elementByClassName = protractor_1.element(protractor_1.by.className("ads"));
        let elementByCss = protractor_1.element(protractor_1.by.css("#mainContent + h2"));
        let elementById = protractor_1.element(protractor_1.by.id("container"));
        let elementByLinkText = protractor_1.element(protractor_1.by.linkText("http://feeds.feedburner.com/Selenium"));
        let elementByPartialLinkText = protractor_1.element(protractor_1.by.partialLinkText("feeds.feedburner.com"));
        let elementByName = protractor_1.element(protractor_1.by.name("cx"));
        let elementByTagName = protractor_1.element(protractor_1.by.tagName("em"));
        let elementByXpath = protractor_1.element(protractor_1.by.xpath("//input[@type='submit']"));
        let wideElement = protractor_1.element(protractor_1.by.js(function () {
            let divs = document.querySelectorAll('div');
            for (let i = 0; i < divs.length; ++i) {
                if (i % 2 === 0) {
                    return divs[i];
                }
            }
        }));
    });
});
//# sourceMappingURL=selectors.js.map