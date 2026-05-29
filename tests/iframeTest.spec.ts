import { test, expect } from "@playwright/test";


test.only('iframe1', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/');
    await page.getByRole('tab', { name: 'iFrame' }).click();
    //   const frame1 = page.frame({ name: 'globalSqa' });
    //   if (!frame1) {
    //      throw new Error('Frame not found');
    //  }
    const frame1 = page.frameLocator('iframe[name="globalSqa"]');

    await frame1.getByRole('textbox', { name: 's' }).waitFor({ state: 'visible' });
    await frame1.getByRole('textbox', { name: 's' }).click();

});

test('mul tab @tab', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'GitHub repository' }).click(),
    ]);

    await newPage.waitForLoadState();
    const pages = page.context().pages();
    for (const t of pages) {
        console.log(await t.title());
    }

})

