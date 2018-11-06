
import { $, ElementFinder } from 'protractor';
export class AddressStepPage {
  private button: ElementFinder;
  constructor() {
    this.button = $('.cart_navigation button');
  }
  public async addressStep(): Promise<void> {
    await this.button.click();
  }
}
