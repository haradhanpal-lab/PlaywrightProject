import { test, expect } from '@playwright/test'
test('interaction with check boxes in playwright with typescript', async ({ page }) => {

await page.goto('https://demo.guru99.com/test/radio.html');
const checkbox1 = page.locator("input#vfb-6-0");
await checkbox1.scrollIntoViewIfNeeded();
await expect(checkbox1).toBeVisible();
await expect(checkbox1).toBeEnabled();
await expect(checkbox1).not.toBeHidden();
await expect(checkbox1).not.toBeDisabled();
await expect(checkbox1).not.toBeChecked();
await page.waitForTimeout(2000); 
await checkbox1.check();
await expect(checkbox1).toBeChecked();
await page.waitForTimeout(2000); 
await checkbox1.uncheck();
await page.waitForTimeout(2000); 
const checkbox2 = page.locator("input#vfb-6-1");
await checkbox2.setChecked(true);
await page.waitForTimeout(2000); 
await checkbox2.setChecked(false);
await page.waitForTimeout(2000); 
const checkboxes = page.locator("input[type=checkbox]");
const count = await checkboxes.count();
// Loop through each checkbox to check them
  for (let i = 0; i < count; i++) {
    await checkboxes.nth(i).check();
  }
  //Assert that all checkboxes are now checked
  for (let i = 0; i < count; i++) {
    await expect(checkboxes.nth(i)).toBeChecked();
  }
  await page.waitForTimeout(2000); 
  // Loop through each checkbox to uncheck them
  for (let i = 0; i < count; i++) {
    await checkboxes.nth(i).setChecked(false);
  }
   //Assert that all checkboxes are now unchecked
  for (let i = 0; i < count; i++) {
    await expect(checkboxes.nth(i)).not.toBeChecked();
  }
await page.waitForTimeout(2000);
});


/*import { test, expect } from '@playwright/test'
test('interaction with radio buttons in playwright with typescript', async ({ page }) => {

await page.goto('https://demo.guru99.com/test/radio.html');
const radio1 = page.locator("input#vfb-7-1");
await radio1.scrollIntoViewIfNeeded();
await expect(radio1).toBeVisible();
await expect(radio1).toBeEnabled();
await expect(radio1).not.toBeHidden();
await expect(radio1).not.toBeDisabled();
await expect(radio1).not.toBeChecked();
await page.waitForTimeout(2000); 
await radio1.check();
await expect(radio1).toBeChecked();
await page.waitForTimeout(2000); 
const radio2 = page.locator("input#vfb-7-2");
await radio2.check();
await expect(radio1).not.toBeChecked();
await expect(radio2).toBeChecked();
await page.waitForTimeout(2000); 
});


/*import { test, expect } from '@playwright/test'

test('interact with input text field', async ({ page }) => {
page.goto("http://www.facebook.com");
const emailTextfield = page.getByTestId("royal-email");
await expect(emailTextfield).toBeVisible();
await expect(emailTextfield).not.toBeHidden();
await expect(emailTextfield).toBeEnabled();
await expect(emailTextfield).not.toBeDisabled();
await emailTextfield.scrollIntoViewIfNeeded();
await emailTextfield.fill("Test11");
await page.waitForTimeout(2000);
await emailTextfield.type("Test22");
await page.waitForTimeout(2000);
await emailTextfield.clear();
await page.waitForTimeout(2000);
await expect(emailTextfield).toHaveAttribute('type', 'text');
await expect(emailTextfield).toHaveAttribute('id', 'email');
await expect(emailTextfield).toHaveAttribute('name', 'email');
await expect(emailTextfield).toHaveAttribute('placeholder', 'Email address or phone number');
await expect(emailTextfield).toHaveAttribute('class', 'inputtext _55r1 _6luy');
await emailTextfield.pressSequentially("Test1234", { delay: 200 });
await page.waitForTimeout(2000);
await expect(emailTextfield).toHaveValue("Test1234");
await page.keyboard.press('Control+A'); 
await page.waitForTimeout(2000);
await page.keyboard.press('Control+C'); 
await emailTextfield.press('Tab');
await page.waitForTimeout(2000);
await page.keyboard.press('Control+V'); 
await emailTextfield.press('Tab');
await page.waitForTimeout(2000);
await emailTextfield.press('Enter');
await page.waitForTimeout(2000);
});



/*import { test, expect } from '@playwright/test'
test('test mouse actions', async ({ page }) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    await page.locator('.context-menu-one').click({ button: 'right' });
    await page.waitForTimeout(2000);
    await page.getByText('Cut', { exact: true }).click();
    await page.waitForTimeout(2000);
    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('clicked: cut');
        await dialog.accept();
    })
    await page.waitForTimeout(2000);
    await page.goto('https://testkru.com/Elements/Buttons');
    await page.locator('button#leftClick').click({ button: 'left' });
    await page.waitForTimeout(2000);
    await page.locator('button#doubleClick').dblclick();
    await page.waitForTimeout(2000);
    await page.locator('button#colorChangeOnHover').hover();
    await page.waitForTimeout(2000);
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details');
    await page.mouse.wheel(0, 100);
    await page.waitForTimeout(2000);
    })





/*import { test, expect } from '@playwright/test';

test('handle shadow dom', async ({ page }) => {
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.waitForTimeout(2000);
    const shadowRoot = await page.locator('#userName');
    const shadowElement = await shadowRoot.locator('input#kils');
    //move to element
    await shadowElement.scrollIntoViewIfNeeded();
    await shadowElement.fill('testinput');
    await page.waitForTimeout(2000);
    await page.locator('input#kils').fill('updated testinput');
    await page.waitForTimeout(2000);
    const secondshadowRoot = await shadowRoot.locator('#app2');
    const shadowElementinnershadow = await secondshadowRoot.locator('#pizza');
    await shadowElementinnershadow.fill('dominos pizza');
    await page.waitForTimeout(2000);   
    await page.locator('#userName >> #app2 >> #pizza').fill('pizza hut');
    await page.waitForTimeout(2000);   
   });


/*

import { test, expect } from '@playwright/test';
test('open multiple tabs', async ({ browser }) => {
const context = await browser.newContext();
const pageOne = await context.newPage();
const pageTwo = await context.newPage();
await pageOne.goto('https://www.facebook.com/');
await pageTwo.goto('https://playwright.dev/');
const pageOneTitle = await pageOne.title();
console.log('Facebook Page title is:', pageOneTitle);
const pageTwoTitle = await pageTwo.title();
console.log('Playwright Page title is:', pageTwoTitle);
const pageThree = await context.newPage();
await pageThree.waitForTimeout(2000);
await pageThree.goto('https://www.bstackdemo.com/');
await pageThree.waitForTimeout(2000);
const ordersLink = await pageThree.getByRole('link', { name: 'Orders' }); 
// wait for the new page event
const pagePromise = context.waitForEvent('page');
//perform action to open new tab
await ordersLink.click({ modifiers: ['ControlOrMeta'] });
await pageThree.waitForTimeout(2000);
//capture new page
const newPage = await pagePromise;
// change focus to new tab
await newPage.waitForLoadState();
await newPage.bringToFront();
await newPage.waitForTimeout(2000);
//sign in to application
await newPage.locator('#username').click();
await newPage.getByText('demouser', { exact: true }).click();
await newPage.locator('#password').click();
await newPage.getByText('testingisfun99', { exact: true }).click();
await newPage.waitForTimeout(2000);
await newPage.locator('#login-btn').click();
await newPage.waitForTimeout(2000);
//Assert empty orders list
await expect(newPage.locator('.orders-listing h2')).toHaveText("No orders found");
await newPage.waitForTimeout(2000);
// Get all open pages (tabs)
const allPages = context.pages();
// Access specific tab by index
const facebookPageTab = allPages[0];
// Make the first tab active
await facebookPageTab.bringToFront();
await pageOne.getByPlaceholder('Email address or phone number').fill('Haradhan');
await newPage.waitForTimeout(2000);
const context2 = await browser.newContext();
const context2Page = await context2.newPage();
await context2Page.goto('https://www.google.com/');
context2.close();
await newPage.waitForTimeout(2000);
context.close();
});



/*
test('test auto waiting functionality', async ({ page }) => {
//How to wait for specific navigation events before proceeding with actions
    await page.goto('https://www.facebook.com/');
    await page.waitForLoadState('domcontentloaded');
    const txtEmail = page.locator("input[placeholder*=Email]");
    txtEmail.waitFor({ state: 'visible', timeout: 5000 })
    await txtEmail.fill('Admin12345&&&&8992');
    await page.locator("input#pass").fill('Password123890');
    await page.waitForTimeout(3000);
    await page.locator("button._4jy1").click();
   //await page.waitForLoadState('networkidle',{timeout:30000});
    await page.waitForURL("https://www.facebook.com/login/?privacy_mutation_token=**");
    await expect(page.locator("div._9ay7")).toHaveText("The email address or mobile number you entered isn't connected to an account. Find your account and log in.");
})

/*
test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal-email').fill('Haradhan');
  await page.getByTestId('royal-login-button').click();
  //await expect(page.getByRole('textbox', { name: 'Email address or mobile number' })).toBeVisible();
});




/*import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal-email').fill('Haradhan12345');
  await page.getByRole('link', { name: 'Forgotten password?' }).click();
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).fill('test@test.com');
  await page.getByRole('button', { name: 'Cancel' }).click();
});  */