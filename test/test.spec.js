const { expect } = require("chai");
const {Builder, Browser,WebDriver,By, Key} = require("selenium-webdriver");

const waitTime = (seconds)=>new Promise((resolve)=>{
    setTimeout(()=>resolve(),seconds*1000);
})

describe("Google test",()=>{
    /**@type {WebDriver} */
    let driver;
    before(async()=>{
        driver = await new Builder().forBrowser(Browser.CHROME).build();
    });
    it("Can access to Google",async()=>{
        await driver.get("https://google.com");
        await driver.findElement(By.id("L2AGLb")).click();
        const pageTitle = await driver.getTitle();
        expect(pageTitle).to.contain("Google");
        await waitTime(4);
    });
    it("Can go to gmail",async()=>{
        const gmail = await driver.findElement(By.linkText("Gmail"));
        expect(gmail).to.exist;
        await gmail.click();
        const pageTitle = await driver.getTitle();
        expect(pageTitle).to.contain("Gmail");
        await waitTime(4);    
    });
    it("Can return to home page",async()=>{
        await driver.navigate().back();
        const pageTitle = await driver.getTitle();
        expect(pageTitle).to.contain("Google"); 
        await waitTime(4);
    });
    it("Can clear search bar", async()=>{
        const searchBar = await driver.findElement(By.name("q"));
        await searchBar.clear();
        const searchBarText = await searchBar.getAttribute("value");
        expect(searchBarText).to.equal("");
        await waitTime(4);
        driver.close();
      });
});