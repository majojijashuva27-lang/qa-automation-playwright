import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly productsTitle: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsTitle = page.locator('.title');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addProductToCart(productName: string) {
    const product = this.page
      .locator('.inventory_item')
      .filter({ hasText: productName });

    await product.locator('button').click();
  }

  async openCart() {
    await this.cartIcon.click();
  }
}
