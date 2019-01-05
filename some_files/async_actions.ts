import {$$, browser, by, element, ElementArrayFinder, ElementFinder, protractor} from "protractor";
let EC = protractor.ExpectedConditions;

describe("async actions", () => {
    beforeEach(async () => {
        await browser.get("https://www.seleniumhq.org/")
    });

    it('should work', async () => {
        debugger;
        let mainContentElement : ElementFinder = element(by.css("#mainContent + h2"));
        let isMainPageReady : Function =  EC.elementToBeClickable(mainContentElement);
        browser.wait(isMainPageReady, 5000);

        let projectsElement : ElementFinder = element(by.id("menu_projects"));
        projectsElement.click();
        let seleniumProjectsHeader : ElementFinder = element(by.tagName("h2"));
        let isProjectPageReady = EC.visibilityOf(seleniumProjectsHeader);
        browser.wait(isProjectPageReady, 5000);

        let text:string = await element(by.css("a[href='remote-control/']")).getText();
        expect(text).toContain("Selenium Remote Control")
        console.log(text);
    });
});