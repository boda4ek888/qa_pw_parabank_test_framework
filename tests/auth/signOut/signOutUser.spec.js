import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/signUpUser';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Successful `Sign out` flow test', async ({
  homePage,
}) => {
  await homePage.open();
  await homePage.clickLogoutLink();

  await homePage.assertLoginPanelVisible();
});
