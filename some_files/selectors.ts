import {$$, browser, by, element, ElementFinder, protractor} from "protractor";
let EC = protractor.ExpectedConditions;

describe("async actions", () => {
    beforeEach(async () => {
        await browser.get("https://www.seleniumhq.org/")
    });

    it('should seach for elements', async () => {
        debugger;
        let elementByText : ElementFinder = element(by.buttonText("edit this page"));
        let elementByCssWithText : ElementFinder =
            element(by.cssContainingText("div [href='/download/']", 'Download Selenium'));
        let elementByClassName: ElementFinder = element(by.className("ads"));
        let elementByCss : ElementFinder = element(by.css("#mainContent + h2"));
        let elementById : ElementFinder = element(by.id("container"));
        let elementByLinkText : ElementFinder = element(by.linkText("http://feeds.feedburner.com/Selenium"));
        let elementByPartialLinkText : ElementFinder = element(by.partialLinkText("feeds.feedburner.com"));
        let elementByName : ElementFinder = element(by.name("cx"));
        let elementByTagName : ElementFinder = element(by.tagName("em"));
        let elementByXpath: ElementFinder = element(by.xpath("//input[@type='submit']"));

        let wideElement = element(by.js(function() {
            let divs = document.querySelectorAll('div');
            for (let i = 0; i < divs.length; ++i) {
                if (i % 2 === 0) {
                    return divs[i];
                }
            }
        }))
    });
});