import { $, ElementFinder } from 'protractor';
export class SummaryStepPage {
  private buyBtn: ElementFinder;
  private textContainer: ElementFinder;
  constructor() {
    this.buyBtn = $('#cart_navigation > button > span');
    this.textContainer = $('#center_column > div > p > strong');
  }
  public async goToSummary(): Promise<void> {
    await this.buyBtn.click();
  }
  public async getText(): Promise<string> {
    return this.textContainer.getText();
  }
}
