import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/signUpUser';

test.beforeEach(async ({ pages, user }) => {
  await signUpUser(pages[0], user);
});

test('Successful `Forgot Login Info` flow test', async ({
  user,
  homePage,
  lookupPage,
}) => {
  await homePage.open();
  await homePage.clickForgotLoginInfoLink();
  await lookupPage.fillFirstNameField(user.firstName);
  await lookupPage.fillLastNameField(user.lastName);
  await lookupPage.fillAddressField(user.address);
  await lookupPage.fillCityField(user.city);
  await lookupPage.fillStateField(user.state);
  await lookupPage.fillZipCodeField(user.zipCode);
  await lookupPage.fillSsnField(user.ssn);
  await lookupPage.clickFindButton();

  await lookupPage.assertUsernameTextVisible(user.username);
  await lookupPage.assertPasswordTextVisible(user.password);
  await homePage.assertWelcomeTextVisible(user.firstName, user.lastName);
});
