import { $, ElementFinder } from 'protractor';
export class PaymentStepPage {
  private paymentBtn: ElementFinder;
  constructor() {
    this.paymentBtn = $('#form button');
  }
  public async paymentStep(): Promise<void> {
    await this.paymentBtn.click();
  }
}
