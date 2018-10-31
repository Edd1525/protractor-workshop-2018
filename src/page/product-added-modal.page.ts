import { $, ElementFinder } from 'protractor';
export class ProductAddedPage {
  private acceptProdutsBtn: ElementFinder;
  constructor() {
    this.acceptProdutsBtn = $('[style*="display: block;"] .button-container > a');
  }
  public async closeModal(): Promise<void> {
    await this.acceptProdutsBtn.click();
  }

  public getButton(): ElementFinder {
    return this.acceptProdutsBtn;
  }
}
