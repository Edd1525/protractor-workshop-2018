import { $, ElementFinder } from 'protractor';
export class SignInStepPage {
  private email: ElementFinder;
  private pass: ElementFinder;
  private submit: ElementFinder;
  constructor() {
    this.email = $('#email');
    this.pass = $('#passwd');
    this.submit = $('#SubmitLogin');
  }
  public async sendLogin(email: string, pass: string): Promise<void> {
    await this.email.sendKeys(email);
    await this.pass.sendKeys(pass);
    await this.submit.click();
  }
}
