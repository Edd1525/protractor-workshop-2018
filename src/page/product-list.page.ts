import { $, ElementFinder, promise } from 'protractor';
export class ProductListPage {
  private addCartBtn: ElementFinder;
  constructor() {
    this.addCartBtn = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }
  public async selectProduct(): Promise<void> {
    await this.addCartBtn.click();
  }
}
