import { Page, Locator } from "@playwright/test";

export class profilePage {

    readonly page: Page;
    readonly firstName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('#firstName');

    }

    async goto() {

        await this.page.goto('https://thedummysite.com/profile');
    }
}