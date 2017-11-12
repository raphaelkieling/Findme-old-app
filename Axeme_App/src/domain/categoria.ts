import { Imagem } from "./imagem";
import { Base } from "./base";

export interface Categoria extends Base {
    nome: string;
    ativo?: boolean;
    imagem: Imagem;
}