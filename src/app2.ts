import { DeveloperBack } from "./model/DeveloperBack"
import { DeveloperFront } from "./model/DeveloperFrot"
import { DeveloperFullStack } from "./model/DeveloperFullStack"

export class App2 {

  public static main(): void {
   

    const devBackend = new DeveloperBack('Diego Almeida')
    const devFrontend = new DeveloperFront('Mayara Rocha')
    const devFullstack = new DeveloperFullStack('Laura Anghel')

    devBackend.makeAPI()
    devFrontend.makeSPA()
    devFullstack.makeAPI()
    devFullstack.makeSPA()

  }
}