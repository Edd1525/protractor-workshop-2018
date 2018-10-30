import { $, ElementFinder, promise } from 'protractor';
export class PaymentStepPage {
  private paymentBtn: ElementFinder;
  constructor() {
    this.paymentBtn = $('#form > p > button > span');
  }
  public async paymentStep(): Promise<void> {
    await this.paymentBtn.click();
  }
}
