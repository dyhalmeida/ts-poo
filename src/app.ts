import { BankAccount } from "./model/Account"

class App {

  public static main(): void {
    const bankAccount: BankAccount = new BankAccount('0826', '080305621', 1, 4000.0)

    console.table(bankAccount)

    bankAccount.deposit(500)

    console.table(bankAccount)

    bankAccount.withdraw(1000)

    console.table(bankAccount)

  }
}

App.main()