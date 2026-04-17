import { test, expect } from '@playwright/test';
test('test facebook home page', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
expect(await page.title()).toEqual("OrangeHRM");
await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
await page.getByRole('textbox', { name: 'username' }).fill('Admin');
await page.getByRole('textbox', { name: 'password' }).fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();
expect(await page.title()).toEqual("OrangeHRM");
await page.waitForTimeout(2000);
await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
await page.getByRole('link', { name: 'Admin' }).click();
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");

await page.waitForTimeout(2000); 
await page.goto('https://demo.guru99.com/test/radio.html');
const checkbox1 = page.getByRole('checkbox').nth(0); // Selects the first checkbox found by role 'checkbox'
await expect(checkbox1).not.toBeChecked();
await checkbox1.check();
await expect(checkbox1).toBeChecked();
await page.waitForTimeout(2000);
await checkbox1.uncheck();
await expect(checkbox1).not.toBeChecked();
await page.waitForTimeout(2000);


/*    await page.goto('https://www.facebook.com/');
const title = await page.title();
expect(title).toContain("Facebook");
const url = await page.url();
expect(url).toEqual("https://www.facebook.com/");
const txtemail = page.locator('input[id="email"]');
await txtemail.fill("test123@test.com");
await page.waitForTimeout(2000); // hard wait for 2000ms
const txtpassword = page.locator('input[id="pass"]');
await txtpassword.fill("Password123");
await page.waitForTimeout(2000);
const btnLogIn = page.locator('button[name="login"]');
await btnLogIn.click();
await page.waitForTimeout(2000);
await page.goto("https://www.google.com/");
await page.waitForTimeout(2000);
expect(await page.title()).toContain("Google");
page.goBack();
await page.waitForTimeout(2000);
expect(await page.title()).toContain("Facebook");
page.goForward();
await page.waitForTimeout(2000);
expect(await page.title()).toContain("Google");
page.reload()
await page.waitForTimeout(2000);
expect(await page.title()).toContain("Google");  */
});