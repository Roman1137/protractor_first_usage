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

    specs:["./some_files/olx_scenario.js"],

    //seleniumAddress: "http://localhost:4444/wd/hub"
    directConnect: true,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 100000,
        isVerbose: true
    }
};