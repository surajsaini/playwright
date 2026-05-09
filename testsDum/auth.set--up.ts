import { test } from '@playwright/test';


test('authenticate', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.context().storageState({ path: 'authFile.json' });
});