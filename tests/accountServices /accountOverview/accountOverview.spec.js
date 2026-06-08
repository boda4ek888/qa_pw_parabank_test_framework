import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Clicking account link navigates to `Accounts Overview` page', async ({
  homePage,
  accountOverviewPage,
}) => {
  await homePage.open();
  await homePage.clickAccountOverviewLink();

  await accountOverviewPage.assertAccountOverviewPanelVisible();
});
