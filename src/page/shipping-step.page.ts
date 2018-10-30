import { $, ElementFinder, promise } from 'protractor';
export class ShippingStepPage {
  private shippingBtn: ElementFinder;
  constructor() {
    this.shippingBtn = $('#cgv');
  }
  public async shippingStep(): Promise<void> {
    await this.shippingBtn.click();
  }
}
