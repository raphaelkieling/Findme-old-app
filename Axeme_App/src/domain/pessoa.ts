import { Prestador } from "./prestador";
import { Imagem } from "./imagem";
import { Base } from "./base";

export interface Pessoa extends Base{
    nome: string;
    telefone: string;
    cpf: string;
    rg: string;
    // sexo:string;
    permissao:string;
    idade?: string;
    imagem?: Imagem;
    prestador?: Prestador;
}