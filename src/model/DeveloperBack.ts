import { IBackEnd } from "../interfaces/IBackEnd";
import { Developer } from "./Developer";

export class DeveloperBack extends Developer implements IBackEnd {
  makeAPI(): void {
    console.log(`Olá, me chamo ${this.name} e estou desenvolvendo uma API com Node JS e Typescript`)
  }
}