import { Categoria } from "./categoria";
import { Base } from "./base";

export interface Prestador extends Base{
    cnpj: string;
    descricao?: string;
    categoria?: Categoria;

}