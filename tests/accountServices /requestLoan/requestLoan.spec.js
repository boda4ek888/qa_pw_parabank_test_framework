import { test } from '../../_fixtures/fixtures';
import { signUpUser } from '../../../src/ui/actions/signUpUser';

const AMOUNT = '100';
const DOWN_PAYMENT = '50';
const APPROVED_STATUS = 'Approved';

  test(`Successfully request a loan`, async ({
    homePage,
    requestLoan,
    page,
    user,
  }) => {
    await signUpUser(page, user);

    await homePage.open();
    await homePage.clickRequestLoanLink();
    await requestLoan.fillAmountField(AMOUNT);
    await requestLoan.fillDownPaymentField(DOWN_PAYMENT);
    await requestLoan.clickApplyForLoanButton();

    await requestLoan.assertLoanStatus(APPROVED_STATUS);
  });