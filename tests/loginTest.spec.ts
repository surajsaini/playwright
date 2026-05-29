import { test, expect } from "@playwright/test"
import { loginPage } from '../pages/loginPage';
import { readExcel } from "../utils/readExcel";

test('test login with different data', async ({ page }) => {

    const loginpage = new loginPage(page);

    const data: any = readExcel("data/userLogin.xlsx", "Sheet1");
    const username1 = data[1].Username;
    const password1 = data[1].Password;


    await loginpage.goto();
    const sccbutton = page.getByRole('button', { name: 'Accept' });
    await sccbutton.click();
    await page.getByRole('link', { name: 'Login' }).first().click();
    await expect(page.getByText('Sign in to your dummy account')).toBeVisible();
    await page.waitForTimeout(3000);
    await loginpage.login(username1, password1);
    await page.screenshot;
    await page.waitForTimeout(3000);
    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();


});