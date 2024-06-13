import { test, expect, chromium} from '@playwright/test'

test('Slow motion and video Recording demo', async () => {
    const browser = await chromium.launch({
        slowMo: 1000,
        headless: false
    })
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {width: 800, height: 600}
        }
    })
    const page = await context.newPage()
    await page.goto ("https://demo.applitools.com/")
    //await page.pause()
    await page.locator('id=username').fill('Tia')
    await page.locator('id=password').fill('Tia@2024')
    //await page.waitForSelector('id=log-in', {timeout : 5000})
    await page.locator('id=log-in').click()
    await context.close()
})