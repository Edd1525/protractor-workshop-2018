import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';
export class ProductAddedPage {
  private acceptProductsBtn: ElementFinder;
  constructor() {
    this.acceptProductsBtn = $('[style*="display: block;"] .button-container > a');
  }
  public async closeModal(): Promise<void> {
    await this.acceptProductsBtn.click();
  }

  public async getButton(): Promise<void> {
    await browser.wait(
      ExpectedConditions.visibilityOf(this.acceptProductsBtn), 3000, 'accept button');
    return this.acceptProductsBtn;
  }
}
