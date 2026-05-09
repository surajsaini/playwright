import { test, expect } from "@playwright/test";



test('iframe1', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/');
    await page.waitForTimeout(3000);

    await page.getByRole('tab', { name: 'iFrame' }).click();
    await page.waitForTimeout(3000);

    const frame1 = page.frame({ name: 'globalSqa' });
    await frame1!.getByRole('textbox', { name: 's' }).click();

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

