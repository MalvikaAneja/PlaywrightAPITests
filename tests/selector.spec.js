import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Selectors', async({page}) => {
    await page.goto("https://www.saucedemo.com")
    await page.pause()
    //using object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('standard_user')
    await page.locator('id=password').fill('secret_sauce')
    //using css locator
    await page.locator('#login-button').click()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    //using Xpath
    //input[@name='password'].fill('text')
    //Using text
    await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")')

})