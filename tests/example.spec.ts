import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://google.co.in/');
  //select from auto suggestive dropdown
  await page.locator('#APjFqb').fill('Playwright');
  await page.waitForTimeout(3000);
  await page.locator('div.wM6W7d>span').nth(3).click();
  await page.waitForTimeout(3000);
  await expect(page).toHaveTitle('Playwright - Google Search');
  await page.waitForTimeout(3000);
 
});