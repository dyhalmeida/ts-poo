import { People } from "./class/People"

class App {

  public static main() {
    console.log('Hello POO')

    const people: People = new People()
    people.name = 'Diego Almeida'
    people.age = 30

    console.table(people)

  }
}

App.main()