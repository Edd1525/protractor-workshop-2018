import { $, ElementFinder } from 'protractor';
export class SummaryStepPage {
  private buyBtn: ElementFinder;
  private textContainer: ElementFinder;
  constructor() {
    this.buyBtn = $('#cart_navigation > button');
    this.textContainer = $('.cheque-indent');
  }
  public async goToSummary(): Promise<void> {
    await this.buyBtn.click();
  }
  public async getText(): Promise<string> {
    return this.textContainer.getText();
  }
}
