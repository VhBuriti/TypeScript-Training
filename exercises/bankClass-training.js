class bankAccount {
  constructor(balance = 0, accountHolder, AccountNumber) {
    this.balance = balance;
    this.accountHolder = accountHolder;
    this.AccountNumber = AccountNumber;
  }

  depositMoney(amt) {
    if (amt > 0) {
      this.balance += amt;
      console.log(
        `You deposited ${amt}, and your current balance is ${balance}`
      );
    } else {
      console.log("You can't deposit a negative amount");
    }
  }

  withdrawMoney(amt) {
    if (this.balance >= amt) {
      this.balance -= amt;
      console.log(
        `You withdrew ${amt}, and your current balance is ${balance}`
      );
    } else {
      console.log("The value is current more than you have in your account");
    }
  }
}
