"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
let EC = protractor_1.protractor.ExpectedConditions;
describe("async actions", () => {
    beforeEach(async () => {
        await protractor_1.browser.get("https://www.seleniumhq.org/");
    });
    it('should work', async () => {
        debugger;
        let mainContentElement = protractor_1.element(protractor_1.by.css("#mainContent + h2"));
        let isMainPageReady = EC.elementToBeClickable(mainContentElement);
        protractor_1.browser.wait(isMainPageReady, 5000);
        let projectsElement = protractor_1.element(protractor_1.by.id("menu_projects"));
        projectsElement.click();
        let seleniumProjectsHeader = protractor_1.element(protractor_1.by.tagName("h2"));
        let isProjectPageReady = EC.visibilityOf(seleniumProjectsHeader);
        protractor_1.browser.wait(isProjectPageReady, 5000);
        let text = await protractor_1.element(protractor_1.by.css("a[href='remote-control/']")).getText();
        expect(text).toContain("Selenium Remote Control");
        console.log(text);
    });
});
//# sourceMappingURL=async_actions.js.map