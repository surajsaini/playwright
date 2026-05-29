import { expect } from '@playwright/test';

import { test } from '../fixture/baseurl';



test('test1', async ({ page }) => {


    await page.locator('#name').fill("suraj");
    await page.getByRole('textbox', { name: 'name' }).fill("Suraj Saini");
    await page.getByRole('textbox', { name: 'email' }).fill("s2008saini@gmail.com");
    await expect(page.getByRole('textbox', { name: 'name' })).toHaveValue('Suraj Saini');

}),


    test('test2', async ({ page }) => {


        await page.locator('#male').check();
        await page.getByLabel('female').check();
        await page.getByRole('checkbox', { name: 'Tuesday' }).check();
        await page.getByLabel('Country').selectOption('Canada');
        await page.getByLabel('Country').selectOption('India');
        await page.getByLabel('Country').selectOption({ index: 2 });
        await page.getByLabel('Colors').selectOption([{ value: 'red' }, { value: 'blue' }]);

    });


