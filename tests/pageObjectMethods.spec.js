import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");
  await page.waitForTimeout(3000);

  let actualTitle = await page.title();
  console.log("Title of the page: " + actualTitle);
});

test("Getting the current url of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");

  let actualUrl = await page.url();
  console.log("Current URL: " + actualUrl);
});

test("Set the window size", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");
  await page.waitForTimeout(3000);
  //await page.setViewportSize({ width: 1280, height: 800 });

 // await page.waitForTimeout(3000);
  //console.log("Window size set to 1280x800");
});

