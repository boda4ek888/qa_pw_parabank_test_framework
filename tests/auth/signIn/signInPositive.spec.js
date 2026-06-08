import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/signUpUser';

test.beforeEach(async ({ pages, user }) => {
  await signUpUser(pages[0], user);
});

test('Successful `Sign in` flow test', async ({ user, homePage }) => {
  await homePage.open();
  await homePage.fillUsernameField(user.username);
  await homePage.fillPasswordField(user.password);
  await homePage.clickLoginButton();

  await homePage.assertWelcomeTextVisible(user.firstName, user.lastName);
});

