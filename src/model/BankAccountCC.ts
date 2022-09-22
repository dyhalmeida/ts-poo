import { UtilDate } from "../utils/UtilDate";
import { BankAccount } from "./BankAccount";

export class BankAccountCC extends BankAccount {
  public extract(): void {
    console.log('*'.repeat(40))
    console.log('*'.repeat(14), 'Extract CC', '*'.repeat(14))
    console.log('*'.repeat(40))
    console.log(`**** Generate in: ${UtilDate.toDateHour(new Date())} ****`)
    console.log('*'.repeat(40))
    for (const movement of this._movements) {
      console.log(movement.toString())
      console.log('-'.repeat(40))
    }
    console.log('*'.repeat(40))
  }
}
