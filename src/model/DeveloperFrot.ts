import { IFrontEnd } from "../interfaces/IFrontEnd";
import { Developer } from "./Developer";

export class DeveloperFront extends Developer implements IFrontEnd {
  makeSPA(): void {
    console.log(`Olá, me chamo ${this.name} e estou desenvolvendo uma SPA com React JS e Typescript`)
  }
}