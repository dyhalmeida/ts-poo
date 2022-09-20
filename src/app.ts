import { BankAccountCC } from "./model/BankAccountCC"
import { BankAccountCP } from "./model/BankAccountCP"

class App {

  public static main(): void {
    const bankAccountA: BankAccountCC = new BankAccountCC('0826', '080305621', 1, 4000.0)
    console.table(bankAccountA)
    bankAccountA.deposit(500)
    console.table(bankAccountA)

    const bankAccountB: BankAccountCP = new BankAccountCP('0827', '080305622', 1, 0)
    console.table(bankAccountB)

    bankAccountA.transfer(350, bankAccountB)
    console.table(bankAccountB)

  }
}

App.main()
