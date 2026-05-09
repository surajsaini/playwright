import { test as setup, expect } from '@playwright/test';

setup('login and save seiion', async ({ page }) => {

    await page.goto('https://thedummysite.com/npx playwright test auth.setup.ts');
    const sccbutton = page.getByRole('button', { name: 'Accept' });
    await sccbutton.click();
    await page.getByRole('link', { name: 'Login' }).first().click();
    await expect(page.getByText('Sign in to your dummy account')).toBeVisible();
    await page.getByRole('textbox', { name: 'username' }).fill("demo");
    await page.getByRole('textbox', { name: 'password' }).fill("demo123");
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();

    await page.context().storageState({ path: 'storageState.json' });



});