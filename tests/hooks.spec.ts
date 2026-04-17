import { expect as baseExpect, test } from '@playwright/test';
// 1. Extend the expect library
export const expect = baseExpect.extend({
  toBeWithinRange(received: number, floor: number, ceiling: number) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () => `expected ${received} NOT to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});
// 2. Use in test
test('numeric range test', () => {
  expect(80).toBeWithinRange(50, 100); // Pass
  expect(70).toBeWithinRange(50, 100); // Fail
});


/*
import { test, expect } from '@playwright/test';

// Runs once before all tests in this file
test.beforeAll(async () => {
  console.log('Before all tests once: setting up environment...');
});

// Runs before each test in this file
test.beforeEach(async ({ page }) => {
console.log('Before each tests: opening the website');
await page.goto('https://playwright.dev');
});

test('validate title', async ({ page }) => {
  await expect(page).toHaveTitle(/Playwright/);
});

test('click on the get started link', async ({ page }) => {
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// Runs after each test in this file
test.afterEach(async ({ page }) => {
  console.log('After each test: performing cleanup...');
  // Example cleanup: clearing local storage or cookies if needed
});

// Runs once after all tests in this file are done
test.afterAll(async () => {
  console.log('After all tests once: final teardown complete.');
});

*/