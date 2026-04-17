import { test, devices, expect } from '@playwright/test';

// Use a specific device descriptor from the built-in library for all tests in this file
test.use({
  ...devices['iPhone 12'],
});

test('test on an iPhone 12 viewport', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  // You can now use touch-specific interactions like page.tap() instead of page.click()
  await page.tap('text=Get started');
  await page.waitForTimeout(2000); 
});

// Use a specific device descriptor from the built-in library for all tests in this file
test.use({
  ...devices['Pixel 5'],
});

test('test on a Pixel 5 viewport', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle(/Google/);
  await page.waitForTimeout(2000); 
});


const iPhone11 = devices['iPhone 11'];
test('test on an iPhone 11 viewport', async ({ browser }) => {
  // Create a new browser context with the iPhone 11 device settings
  const context = await browser.newContext({
    ...iPhone11,
    colorScheme: 'dark', // or 'light'
    locale: 'en-US',
    timezoneId: 'America/Los_Angeles',  //'America/New_York'
    //locale: 'en-GB',
    //locale: 'de-DE',
    //timezoneId: 'Europe/Paris',
    geolocation: { latitude: 37.7749, longitude: -122.4194 },
    permissions: ['geolocation'],
  });
   // Create a new page in the context
  const page = await context.newPage();
   // Navigate to the login page
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  // Enter username
  await page.fill('#username', 'student');
  // Enter password
  await page.fill('#password', 'Password123');
  // Click the login button
  await page.click('#submit');
  // Check if login was successful by checking for a specific element
  const successMessage = await page.textContent('.post-title');
  if (successMessage?.includes('Logged In Successfully')) {
    console.log('Login successful');
  } else {
    console.log('Login failed');
  }
  await page.waitForTimeout(2000); 
});

/*import { chromium, devices } from 'playwright';
const iPhone11 = devices['iPhone 11'];
(async () => {
  // Launch the Chromium browser
  const browser = await chromium.launch({ headless: false });
  // Create a new browser context with the iPhone 11 device settings
  const context = await browser.newContext({
    ...iPhone11,
    locale: 'en-US',
    geolocation: { latitude: 37.7749, longitude: -122.4194 },
    permissions: ['geolocation'],
  });
  // Create a new page in the context
  const page = await context.newPage();
  // Navigate to the login page
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  // Enter username
  await page.fill('#username', 'student');
  // Enter password
  await page.fill('#password', 'Password123');
  // Click the login button
  await page.click('#submit');
  // Check if login was successful by checking for a specific element
  const successMessage = await page.textContent('.post-title');
  if (successMessage?.includes('Logged In Successfully')) {
    console.log('Login successful');
  } else {
    console.log('Login failed');
  }

  // Close the browser
  await browser.close();
})();


/*import { test, expect, devices } from '@playwright/test';

// Use a specific device for all tests within this describe block
test.describe('Mobile Web Tests - iPhone 12', () => {
  test.use({ ...devices['iPhone 12'] });

  test('capture screenshot from google page on iPhone 12', async ({ page }) => {
  await page.goto('https://google.co.in/');
  await page.screenshot({ path: 'screenshot.png' });
  //select from auto suggestive dropdown
  await page.locator('#APjFqb').fill('Playwright');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'screenshot/.screenshotfullpage.png', fullPage: true }); 
  });
});


/*
import { test, expect } from '@playwright/test';

test('capture screenshot', async ({ page }) => {
  await page.goto('https://google.co.in/');
  await page.screenshot({ path: 'screenshot.png' });
  //select from auto suggestive dropdown
  await page.locator('#APjFqb').fill('Playwright');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'screenshot/.screenshotfullpage.png', fullPage: true }); 
  
});  */