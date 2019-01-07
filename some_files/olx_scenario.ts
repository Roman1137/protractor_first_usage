import {$$, browser, by, element, protractor} from "protractor";
let EC = protractor.ExpectedConditions;

describe("olx scenario", () => {
    beforeEach(async () => {
        await browser.get("https://www.olx.ua/")
    });

    it('should work', async () => {
        debugger;
        let propertyElement  = element(by.css("[class*='link parent'][data-id='1']"));
        let isMainPageReady = await EC.elementToBeClickable(propertyElement);
        await browser.wait(isMainPageReady, 5000);
        await propertyElement.click();

        let flatsAndRoomsElement = element(by.css("[data-id='1596']"));
        let isFlatAndRoomsReady = await EC.elementToBeClickable(propertyElement);
        await browser.wait(isFlatAndRoomsReady, 5000);
        await flatsAndRoomsElement.click();


        let flatAndRoomsDropDown = element(by.css("[class='rel combospace']"));
        let isFlatAndRoomsDropDownReady = await EC.elementToBeClickable(flatAndRoomsDropDown);
        await browser.wait(isFlatAndRoomsDropDownReady, 10000);

        let text:string = await flatAndRoomsDropDown.getText();
        expect(text).toContain("Квартиры, комнаты");
        console.log(text);

        await flatAndRoomsDropDown.click();
        let allOptionsElement = element(by.css("#categorySelectList"));
        let isAllOptionsElementPresent: Function = await EC.elementToBeClickable(allOptionsElement);
        await browser.wait(isAllOptionsElementPresent,5000);

        let electronicElement = element(by.css(".categorySelectA1#a-category-37[data-id='37']"));
        await browser.actions().mouseMove(electronicElement).perform();

        let liElements = $$("ul#categorySelectList > li");
        let isHoverAttributePresent : Function = async () => await liElements.getAttribute("class")
            .then(value => {
                console.log(value);
                return value.includes("hover")
            });

        await browser.wait(isHoverAttributePresent, 5000);
    });
});