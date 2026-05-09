import { test as base } from '@playwright/test';

type MyFixtures = {

}

export const test = base.extend({

    page: async ({ page }, use) => {

        await page.goto('https://testautomationpractice.blogspot.com');
        await use(page);
        console.log("test done");

    }


});