export abstract class BankAccount {
  
  private _agency: string
  private _account: string
  private _digit: number
  private _balance: number
  private readonly _MINIMUM_VALUE_DEPOSIT: number = 10.0

  constructor(agency: string, account: string, digit: number, balance: number) {
    this._agency = agency
    this._account = account
    this._digit = digit
    this._balance = balance
  }
  
  public get agency(): string {
    return this._agency
  }

  public set agency(value: string) {
    this._agency = value
  }

  public get account(): string {
    return this._account
  }

  public set account(value: string) {
    this._account = value
  }

  public get digit(): number {
    return this._digit
  
  }
  public set digit(value: number) {
    this._digit = value
  }

  public get balance(): number {
    return this._balance
  }

  public deposit(value: number): void {
    if (value < this._MINIMUM_VALUE_DEPOSIT) {
      throw new RangeError(`O valor mínimo para deposito é de ${this._MINIMUM_VALUE_DEPOSIT}`)
    }
    this._balance += value
  }

  public withdraw(value: number): number {

    if (value > this._balance) {
      throw new RangeError('Saldo insuficiente');
    }

     this._balance -= value
     return value
  }

  public transfer(value: number, account: BankAccount): void {
    this.withdraw(value)
    account.deposit(value)
  }

}