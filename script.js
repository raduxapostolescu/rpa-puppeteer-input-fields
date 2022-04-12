const data = require("./Data/accounts.json");

const puppeteer = require("puppeteer");

(async () => {
  console.log("Puppeteer initializing");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://127.0.0.1:5500/index.html?");

  for (let i = 0; i < data.length; i++) {
    await page.type("#testName", data[i].Name);
    await page.type("#testEmail", data[i].Email);
    await page.type("#testSupervisor", data[i].SupervisorID);
    await page.type("#testRole", data[i].Role);
    await page.screenshot({ path: "example" + [i] + ".png" });
    await page.click("#submitButton");
    console.log("Form Submitted");
    await page.waitForTimeout(1000);
  }
  console.log("Inputs filled!");

  console.log("Puppeteer shutting down");

  await browser.close();
})();
