import { test, expect } from '@playwright/test';



test('testD1', async ({ page }) => {
    await page.goto('https://thedummysite.com/panel');

    await page.waitForTimeout(5000);
});