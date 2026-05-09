import { test, expect } from '@playwright/test';
import { profilePage } from '../pages/profilePage';




test('testD1', async ({ page }) => {
    const proPage = new profilePage(page);
    proPage.goto();
    await expect(page.locator('#firstName')).toBeVisible();
    await expect(proPage.firstName).toHaveValue('MrDemo');
    await expect(page.locator('#firstName')).toBeDisabled();

    await page.waitForTimeout(3000);
});