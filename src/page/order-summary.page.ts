import { $, ElementFinder } from 'protractor';
export class OrderSummaryPage {
  private acceptBtn: ElementFinder;
  constructor() {
    this.acceptBtn = $('.cart_navigation span');
  }
  public async goToSummary(): Promise<void> {
    await this.acceptBtn.click();
  }
}
