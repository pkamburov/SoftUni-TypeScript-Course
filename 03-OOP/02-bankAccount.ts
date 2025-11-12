class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (this.balance - amount > 0) {
      this.balance -= amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}

// Test 1
// const account = new BankAccount(100);
// account.deposit(50);
// account.withdraw(30);
// console.log(account.getBalance());

//// Test 2
const account = new BankAccount(20);
account.withdraw(30);
console.log(account.getBalance());
