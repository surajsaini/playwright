import { expect, test } from '@playwright/test';

test.only("api1", async ({ request }) => {
    
        const response = await request.get('https://automationexercise.com/api/productsList');
        expect(response.status()).toBe(200);

        const body = await response.json();
        console.log("Response Body:", JSON.stringify(body, null, 2));
      //  expect(body.data).toBeTruthy();
       // expect(body.data.length).toBeGreaterThan(0);
        //expect(body.page).toBe(2);
    });


