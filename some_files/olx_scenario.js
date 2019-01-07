"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
let EC = protractor_1.protractor.ExpectedConditions;
describe("olx scenario", () => {
    beforeEach(async () => {
        await protractor_1.browser.get("https://www.olx.ua/");
    });
    it('should work', async () => {
        debugger;
        let propertyElement = protractor_1.element(protractor_1.by.css("[class*='link parent'][data-id='1']"));
        let isMainPageReady = await EC.elementToBeClickable(propertyElement);
        await protractor_1.browser.wait(isMainPageReady, 5000);
        await propertyElement.click();
        let flatsAndRoomsElement = protractor_1.element(protractor_1.by.css("[data-id='1596']"));
        let isFlatAndRoomsReady = await EC.elementToBeClickable(propertyElement);
        await protractor_1.browser.wait(isFlatAndRoomsReady, 5000);
        await flatsAndRoomsElement.click();
        let flatAndRoomsDropDown = protractor_1.element(protractor_1.by.css("[class='rel combospace']"));
        let isFlatAndRoomsDropDownReady = await EC.elementToBeClickable(flatAndRoomsDropDown);
        await protractor_1.browser.wait(isFlatAndRoomsDropDownReady, 10000);
        let text = await flatAndRoomsDropDown.getText();
        expect(text).toContain("Квартиры, комнаты");
        console.log(text);
        await flatAndRoomsDropDown.click();
        let allOptionsElement = protractor_1.element(protractor_1.by.css("#categorySelectList"));
        let isAllOptionsElementPresent = await EC.elementToBeClickable(allOptionsElement);
        await protractor_1.browser.wait(isAllOptionsElementPresent, 5000);
        let electronicElement = protractor_1.element(protractor_1.by.css(".categorySelectA1#a-category-37[data-id='37']"));
        await protractor_1.browser.actions().mouseMove(electronicElement).perform();
        let liElements = protractor_1.$$("ul#categorySelectList > li");
        let isHoverAttributePresent = async () => await liElements.getAttribute("class")
            .then(value => {
            console.log(value);
            return value.includes("hover");
        });
        await protractor_1.browser.wait(isHoverAttributePresent, 5000);
    });
});
//# sourceMappingURL=olx_scenario.js.map