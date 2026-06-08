import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/signUpUser';

const accountTypes = ['CHECKING', 'SAVINGS'];

accountTypes.forEach((accountType) => {
  test(`Successfully opens new ${accountType.toLowerCase()} account`, async ({
    homePage,
    openAccountPage,
    accountOverviewPage, page, user
  }) => {
    await signUpUser(page, user);

    await homePage.open();
    await homePage.clickOpenAccountLink();
    await openAccountPage.selectAccountType(accountType);
    await openAccountPage.waitForAccountOptions();
    await openAccountPage.clickOpenAccountButton();

    const accountId = await openAccountPage.getAccountNumber();

    await openAccountPage.clickAccountIdLink();

    await accountOverviewPage.assertAccountIdValue(accountId);
    await accountOverviewPage.assertAccountType(accountType);
  })
});