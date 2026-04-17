import { test, expect } from '@playwright/test'

test('test getByText and getByLabel playwright locator functionality', async ({ page }) => {
await page.goto('https://www.facebook.com/');
await page.locator("input[placeholder*=Email]").fill('Admin12345');
await page.waitForTimeout(2000);
await page.locator("input#pass").fill('Password12345');
await page.waitForTimeout(2000);
await page.locator("button._4jy1").click();
await page.waitForTimeout(2000);


/*
await page.goto('https://login.salesforce.com/');
await page.getByLabel('Remember me').check();
await page.waitForTimeout(2000);
await page.getByLabel('Remember me').uncheck();
await page.waitForTimeout(2000);
await page.getByText('Forgot Your Password?').click();
await expect(page.getByText('Reset Your Password')).toBeVisible();
await expect(page.getByText('Reset Your Password', { exact: true })).toBeVisible();

/*test('validate browser navigation', async ({ browser }) => {
  const context = await browser.newContext();
  const page1 = await context.newPage();
  const page2 = await context.newPage();
  const page3 = await context.newPage();
  await page1.goto('https://www.facebook.com/');
  expect(await page1.title()).toContain("Facebook");
  await page1.waitForTimeout(2000); // hard wait for 2000ms
  await page2.goto('https://www.google.com/');
  expect(await page2.title()).toContain("Google");
  await page2.waitForTimeout(2000);
  await page3.goto('https://playwright.dev/');
  expect(await page3.title()).toContain("Playwright");
  await page1.close();
  await page3.waitForTimeout(2000);
  await browser.close();

  */
});


