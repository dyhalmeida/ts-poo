import { People } from "./class/People"

class App {

  public static main() {
    console.log('Hello POO')

    const people: People = new People()
    people.setName('Diego Almeida')
    people.setAge(30)

    console.table(people)

  }
}

App.main()