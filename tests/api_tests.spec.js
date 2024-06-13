import { test, expect } from '@playwright/test';

//GET API
test('GET Request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Janet')
    console.log(await response.json())
})

//POST API

test('POST Request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data:
        {
            "name": "Malvika",
            "job": "Engineer"
        }

    });
    expect(response.status()).toBe(201);
    const text = await response.text();
    expect(text).toContain('Malvika')
    console.log(await response.json())
})

///PUT API

test('PUT Request', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data:
        {
            "name": "Malvika",
            "job": "Tester"
        }

    });
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Tester')
    console.log(await response.json())

})

//DELETE API

test('DELETE Request', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
})