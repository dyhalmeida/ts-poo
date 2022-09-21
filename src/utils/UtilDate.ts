export class UtilDate {

  public static toDateHour(date: Date) {
    return Intl.DateTimeFormat('pt-br', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date)
  }

  public static toDate(date: Date) {
    return Intl.DateTimeFormat('pt-br', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    }).format(date)
  }

  public static toHour(date: Date) {
    return Intl.DateTimeFormat('pt-br', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(date)
  }

}