import { test, expect} from '@playwright/test'

test('Demo login test1', async ({page}) => {
    await page.goto ("https://demo.applitools.com/")
    await page.pause()
    await page.locator('id=username').fill('Tia')
    await page.locator('id=password').fill('Tia@2024')
    //await page.waitForSelector('id=log-in', {timeout : 5000})
    await page.locator('id=log-in').click()
})

test('Demo login test2', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/')
    //await page.pause()
    await page.locator('name=username').fill('Admin')
    await page.locator('[placeholder="Password"]').fill('admin123')
    await page.locator('button:has-text("Login")').click()
})

test('demon login test3', async({page}) => {

   await page.goto('https://admin-demo.nopcommerce.com/login');
   await page.getByLabel('Email:').click();
   await page.getByLabel('Email:').press('Control+a');
   await page.getByLabel('Email:').fill('admin@yourstore.com');
   await page.getByLabel('Password:').click();
   await page.getByLabel('Password:').press('Control+a');
   await page.getByLabel('Password:').fill('admin');
   await page.getByRole('button', { name: 'Log in' }).click();
   await page.getByRole('link', { name: 'Logout' }).click();
})
