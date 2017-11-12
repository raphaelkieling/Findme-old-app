import { Pessoa } from "./pessoa";
import { Base } from "./base";

export interface Usuario extends Base{
    email: string;
    senha: string;
    ativo?: boolean;
    pessoa: Pessoa;
}