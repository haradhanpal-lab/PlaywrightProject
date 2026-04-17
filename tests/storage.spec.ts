import { test, chromium } from '@playwright/test'; 
 
test('Multiple users using contexts', async () => { 
  const browser = await chromium.launch(); 
 
  // Admin context 
  const adminContext = await browser.newContext(); 
  const adminPage = await adminContext.newPage(); 
  await adminPage.goto('https://conduit.bondaracademy.com/login'); 
  await adminPage.fill('[placeholder="Email"]', 'abc@cd.com'); 
  await adminPage.fill('[placeholder="Password"]', 'adminuser'); 
  await adminPage.click('button[type="submit"]'); 
  await adminPage.waitForTimeout(5000); 
  await adminContext.storageState({ path: 'playwright/.auth/admin.json' }); 
 
  // Regular user context 
  const userContext = await browser.newContext(); 
  const userPage = await userContext.newPage(); 
  await userPage.goto('https://conduit.bondaracademy.com/login'); 
  await userPage.fill('[placeholder="Email"]', 'abcd@abc.com'); 
  await userPage.fill('[placeholder="Password"]', 'regularuser'); 
  await userPage.click('button[type="submit"]'); 
  await userPage.waitForTimeout(5000); 
  await userContext.storageState({ path: 'playwright/.auth/regular.json' }); 
 
  await browser.close(); 
}); 


/*import { test, expect } from '@playwright/test'; 
 
test.describe('Admin Login', () => { 
  test('Admin dashboard access', async ({ page }) => { 
    // Admin user 
  await page.goto('https://conduit.bondaracademy.com/login'); 
  await page.fill('[placeholder="Email"]', 'abc@cd.com'); 
  await page.fill('[placeholder="Password"]', 'adminuser'); 
  await page.click('button[type="submit"]'); 
  await page.waitForTimeout(5000); 
  await page.context().storageState({ path: 'playwright/.auth/admin.json' }); 
  }); 
}); 
 
test.describe('Regular user Login', () => { 
    test('Regular user access', async ({ page }) => { 
     // Regular user 
     await page.goto('https://conduit.bondaracademy.com/login'); 
     await page.fill('[placeholder="Email"]', 'abcd@abc.com'); 
     await page.fill('[placeholder="Password"]', 'regularuser'); 
     await page.click('button[type="submit"]'); 
     await page.waitForTimeout(5000); 
     await page.context().storageState({ path: 'playwright/.auth/regular.json' }); 
    }); 
  }); 

*/