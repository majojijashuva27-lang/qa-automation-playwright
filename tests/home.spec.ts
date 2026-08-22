import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import users from '../test-data/users.json';

test.describe('Product Tests', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );
  });

  test('Verify products page is displayed', async ({ page }) => {
    const homePage = new HomePage(page);

    await expect(homePage.productsTitle).toHaveText('Products');
  });

  test('Verify product can be added to cart', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.addProductToCart('Sauce Labs Backpack');

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

});
