import { IBackEnd } from "../interfaces/IBackEnd";
import { IFrontEnd } from "../interfaces/IFrontEnd";
import { Developer } from "./Developer";

export class DeveloperFullStack extends Developer implements IFrontEnd, IBackEnd {
  makeAPI(): void {
    console.log(`Olá, me chamo ${this.name} e estou desenvolvendo uma SPA com React JS e Typescript`)
  }
  makeSPA(): void {
    console.log(`Olá, me chamo ${this.name} e estou desenvolvendo uma API com Node JS e Typescript`)
  }
}