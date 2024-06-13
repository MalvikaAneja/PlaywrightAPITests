import { test, expect} from '@playwright/test'
//import test from 'node:test'

test('Assertions demo', async({page})=> {

    await page.goto('https://kitchen.applitools.com/')
    
    //ASSERTIONS

    //Check element present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
    //To be used only when to check if 
    if(await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click()
    }   

    //Check element hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    //await expect.soft(page.locator('text=The Kitchen')).toBeHidden() 
    //soft is used so that execution doesn't stop on failure

    //Check element to be enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    //await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()
    
    //Check text
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    //await expect.soft(page.locator('text=The Kitchen')).not.toHaveText('ABHGk')

    //Check value of element attributes
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class','chakra-heading css-dpmy2a')
    //or with regex
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class',/.*css-dpmy2a/)
    //or with diff property
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)

    //Check page url or title
    await expect (page).toHaveTitle('The Kitchen')
    await expect (page).toHaveURL('https://kitchen.applitools.com/')
    await page.pause()

    //Visual validation with screenshot
    await expect(page).toHaveScreenshot()


})