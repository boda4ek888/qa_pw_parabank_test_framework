import { testStep } from '../../../common/helpers/pwHelpers';
import { expect } from '@playwright/test';

export class AccountOverviewPage {
  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
    this.accountOverviewPanel = page.locator('#overviewAccountsApp');
    this.accountId = page.locator('#accountId');
    this.accountType = page.locator('#accountType');
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  async assertAccountOverviewPanelVisible() {
    await this.step(`Assert that overview panel is visible`, async () => {
      await expect(this.accountOverviewPanel).toBeVisible();
    });
  }

  async assertAccountIdValue(id) {
    await this.step(`Assert account ID value is ${id}`, async () => {
      await expect(this.accountId).toHaveText(id);
    })
  }

  async assertAccountType(type) {
    await this.step(`Assert account type is ${type}`, async () => {
      await expect(this.accountType).toHaveText(type);
    });
  }
}
