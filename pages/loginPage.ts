import { Page, Locator } from "@playwright/test"


export class loginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly signIn: Locator;

    constructor(page: Page) {

        this.page = page;
        this.username = page.getByRole('textbox', { name: 'username' });
        this.password = page.getByRole('textbox', { name: 'password' });
        this.signIn = page.getByRole('button', { name: 'Sign In' });
    }

    async goto() {
        await this.page.goto('https://thedummysite.com/');
    }

    async login() {

        await this.username.fill("demo");
        await this.password.fill("demo123");
        await this.signIn.click();


    }

}