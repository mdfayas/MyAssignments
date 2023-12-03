import {chromium, test} from "@playwright/test";
test("Login Salesforce",async()=>{
    const browserInstance = await chromium.launch({headless: false, channel: "chrome"});
    const browserContext = await browserInstance.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("mdfayas.2006@gmail.com");
    await page.locator("[name=pw]").fill("04Mf1286$");
    await page.locator("//input[@type='submit']").click();
    await page.waitForTimeout(5000);
    await page.waitForLoadState("load");
    console.log("Page Title of Home page :" +await page.title());


});
