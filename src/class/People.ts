export class People {

  private name: string = '' 
  private age: number = 0

  /**
   * Getter and Setter
   */
  public setName(name: string): void {
    this.name = name
  }

  public getName(): string {
    return this.name
  }

  public setAge(age: number): void {
    this.age = age
  }

  public getAge(): number {
    return this.age
  }
  
}