import { $, ElementFinder } from 'protractor';
export class BankPaymentPage {
  private paymentLink: ElementFinder;
  constructor() {
    this.paymentLink = $('#HOOK_PAYMENT a.bankwire');
  }
  public async bankPayment(): Promise<void> {
    await this.paymentLink.click();
  }
}
