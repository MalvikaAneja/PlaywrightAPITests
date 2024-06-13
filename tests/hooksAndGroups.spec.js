import { test, expect } from '@playwright/test'

test.describe('All Tests', () => {


    test.beforeEach(async ({page}) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('id=login-button').click();
        // await page.waitForURL('https://www.saucedemo.com/inventory.html')
        //await page.close()
    })

    test.afterEach(async ({ page }) => {
        
        await page.close()
    })

    test('Homepage', async ({ page }) => {
        
        // await page.goto('https://www.saucedemo.com/');
        // await page.locator('[data-test="username"]').fill('standard_user');
        // await page.locator('[data-test="password"]').fill('secret_sauce');
        // await page.locator('id=login-button').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        // await page.close() 
    })

 

    test('Logout', async ({ page }) => {
        // await page.goto('https://www.saucedemo.com/');
        // await page.locator('[data-test="username"]').fill('standard_user');
        // await page.locator('[data-test="password"]').fill('secret_sauce');
        // await page.locator('id=login-button').click();
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();
        //await page.close() 
    })

})



