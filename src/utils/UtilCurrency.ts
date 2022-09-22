export abstract class UtilCurrency {

  public static toBRL(value: number): string {
    return Intl.NumberFormat('pt-br', {
      currency: 'BRL',
      style: 'currency',
    }).format(value)
  }
  
}