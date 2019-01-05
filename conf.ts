import {Config, browser} from "protractor";
export let config: Config = {
    framework : "jasmine",

    capabilities: {
        browserName : "chrome"
    },

    onPrepare: async function() {
        // The internet website is not angular:
        await browser.waitForAngularEnabled(false)

    },

    specs:["./some_files/async_actions.js"],

    //seleniumAddress: "http://localhost:4444/wd/hub"
    directConnect: true
};