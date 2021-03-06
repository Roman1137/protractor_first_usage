"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    framework: "jasmine",
    capabilities: {
        browserName: "chrome"
    },
    onPrepare: async function () {
        // The internet website is not angular:
        await protractor_1.browser.waitForAngularEnabled(false);
    },
    specs: ["./some_files/olx_scenario.js"],
    //seleniumAddress: "http://localhost:4444/wd/hub"
    directConnect: true,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 100000,
        isVerbose: true
    }
};
//# sourceMappingURL=conf.js.map