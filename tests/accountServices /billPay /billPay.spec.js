import { test } from '../../_fixtures/fixtures';
import { faker } from '@faker-js/faker';
import { signUpUser } from '../../../src/ui/actions/signUpUser';

const VALID_AMOUNT = '100.00';
const ACCOUNT_NUMBER = faker.string.numeric(5);

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Successfully pay a bill', async ({
  homePage, user, payBillPage
}) => {
  await homePage.open();
  await homePage.clickBillPayLink();
  await payBillPage.fillPayeeNameField(user.firstName);
  await payBillPage.fillAddressField(user.address);
  await payBillPage.fillCityField(user.address);
  await payBillPage.fillStateField(user.state);
  await payBillPage.fillZipCodeField(user.zipCode);
  await payBillPage.fillPhoneNumberField(user.phone);
  await payBillPage.fillAccountNumberField(ACCOUNT_NUMBER);
  await payBillPage.fillVerifyAccountField(ACCOUNT_NUMBER);
  await payBillPage.fillAmountField(VALID_AMOUNT);
  const ACCOUNT_ID = await payBillPage.getAccountId();
  await payBillPage.clickSendPaymentButton();

  await payBillPage.assertBillPayResultHasCorrectValues(
    user.firstName,
    VALID_AMOUNT,
    ACCOUNT_ID,
  );
});
