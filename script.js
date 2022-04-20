const data = require("./Data/accounts.json");

const puppeteer = require("puppeteer");

(async () => {
  console.log("Puppeteer initializing");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://127.0.0.1:5500/index.html?");

  for (const [index, element] of data.entries()) {
    await page.type("#testName", element.Name);
    await page.type("#testEmail", element.Email);
    await page.type("#testSupervisor", element.SupervisorID);
    await page.type("#testRole", element.Role);
    await page.screenshot({ path: "example" + index + ".png" });
    await page.click("#submitButton");
    console.log("Form Submitted");
    await page.waitForTimeout(1000);
  }

  console.log("Inputs filled!");

  console.log("Puppeteer shutting down");

  await browser.close();
})();
