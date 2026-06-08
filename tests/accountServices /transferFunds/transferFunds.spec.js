import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/signUpUser';
import { openAccount } from '../../../src/ui/actions/openAccount';

const VALID_AMOUNT = '50.00';

test.beforeEach(async ({ page, user }) => {
  await signUpUser(page, user);
});

test('Successfully transfer funds', async ({
  homePage,
  transferFundsPage,
  page, user
}) => {
  const newAccountId = await openAccount(page, user);

  await homePage.open();
  await homePage.clickTransferFundsLink();
  await transferFundsPage.fillAmountField(VALID_AMOUNT);
  await transferFundsPage.selectToAccountId(newAccountId);

  const fromAccountId = await transferFundsPage.getAccountId();
  await transferFundsPage.clickTransferFundsButton();

  await transferFundsPage.assertTransferResult(
    fromAccountId,
    newAccountId,
    VALID_AMOUNT,
  );
});
