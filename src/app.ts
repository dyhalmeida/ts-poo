import { App2 } from "./app2"
import { BankAccountCC } from "./model/BankAccountCC"
import { BankAccountCP } from "./model/BankAccountCP"

class App {

  public static main(): void {
    const bankAccountA: BankAccountCC = new BankAccountCC('0826', '080305621', 1, 4000.0)
    bankAccountA.deposit(500)

    const bankAccountB: BankAccountCP = new BankAccountCP('0827', '080305622', 1, 0)

    bankAccountA.transfer(350, bankAccountB)

    bankAccountA.extract()
    console.log('\n')
    console.log('\n')
    bankAccountB.extract()
    
  }
}

// App.main()
App2.main()
