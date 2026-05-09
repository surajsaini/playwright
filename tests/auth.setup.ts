import { test as setup, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';

setup('login and save seiion', async ({ page }) => {

    const loginpage = new loginPage(page);


    loginpage.goto();
    const sccbutton = page.getByRole('button', { name: 'Accept' });
    await sccbutton.click();
    await page.getByRole('link', { name: 'Login' }).first().click();
    await expect(page.getByText('Sign in to your dummy account')).toBeVisible();
    loginpage.login();
    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();

    await page.context().storageState({ path: 'storageState.json' });



});