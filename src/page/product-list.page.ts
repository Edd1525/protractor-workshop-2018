import { $, ElementFinder } from 'protractor';
export class ProductListPage {
  private addCartBtn: ElementFinder;
  constructor() {
    this.addCartBtn = $('#center_column a.ajax_add_to_cart_button');
  }
  public async selectProduct(): Promise<void> {
    await this.addCartBtn.click();
  }
}
