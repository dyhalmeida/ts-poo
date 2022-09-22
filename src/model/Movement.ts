import { UtilCurrency } from "../utils/UtilCurrency"
import { UtilDate } from "../utils/UtilDate"

export class Movement {

  private _description: string
  private _value: number
  private _date: Date

  constructor(description: string, value: number) {
    this._description = description
    this._value = value
    this._date = new Date()
  }

  public set description(description: string) {
    this._description = description
  }

  public get descripion(): string {
    return this._description
  }

  public set value(value: number) {
    this._value = value
  }

  public get value(): number {
    return this._value
  }

  public get date(): Date {
    return this._date
  }

  public toString(): string {
    return `${this.descripion}\n${UtilDate.toDateHour(this.date)} - ${UtilCurrency.toBRL(this.value)}`
  }

}