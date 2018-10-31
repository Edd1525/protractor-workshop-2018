import { $, ElementFinder } from 'protractor';
export class BankPaymentPage {
  private paymentLink: ElementFinder;
  constructor() {
    this.paymentLink = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }
  public async bankPayment(): Promise<void> {
    await this.paymentLink.click();
  }
}
