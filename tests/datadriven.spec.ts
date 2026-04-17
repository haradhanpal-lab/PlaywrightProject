import { test, expect } from '@playwright/test';
import { readCsvData } from '../../utils/csvReader'; // Adjust the path as necessary
const testData = readCsvData('./loginData.csv'); // Path to the CSV file
for (const data of testData) {
  test(`Login test for user: ${data.username}`, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill('//input[@name="username"]', data.username); // Use data from the CSV
    await page.fill('//input[@name="password"]', data.password); // Use data from the CSV
    await page.waitForTimeout(2000);
    await page.click('button[type="submit"]');
    // Adjust assertions based on the expected outcome for each user
    if (data.expectedUrl === 'dashboard') {
      await expect(page).toHaveURL(/dashboard/);
    } else {
      await expect(page).toHaveURL(/login/); // Or check for an error message
    }
  });
}