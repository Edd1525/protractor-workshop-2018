import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Send personal information form', () => {
  const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('When I fill all the information', () => {
    beforeAll(async () => {
      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        profession: ['Automation Tester'],
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        file: './resources/DIM.jpg',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands'
        ]
      });
    });

    it('And the title is verified', async () => {
      await expect(personalInformationPage.getResponse())
        .toBe('Practice Automation Form');
    });

    it('Should have filename', async () => {
      const filename = await personalInformationPage.getFilename();
      expect(filename.indexOf('DIM.jpg')).toBeGreaterThan(-1);
    });
  });
});
