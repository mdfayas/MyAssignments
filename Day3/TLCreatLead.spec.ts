import {chromium, test} from "@playwright/test";
test("To lauch Browser",async()=>{
    const browserInstance = await chromium.launch({headless: false, channel: "chrome"});
    const browserContext = await browserInstance.newContext();
    const page = await browserContext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.locator("[value='Login']").click();
    await page.waitForTimeout(5000);
    await page.locator("text=CRM/SFA").click();
    await page.waitForLoadState("load");
    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Create Lead']").click();
    await page.locator("#createLeadForm_companyName").fill("Rapo");
    await page.locator("#createLeadForm_firstName").fill("Fayaz");
    await page.locator("#createLeadForm_lastName").fill("Sujavudeen");
    await page.locator("[value='Create Lead']").click();
});