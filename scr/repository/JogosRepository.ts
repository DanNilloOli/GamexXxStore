import { Jogos } from "../model/Jogos";

export interface JogosRepository{

    procurarPorId(id: number): void;
    listarTodas(): void;
    cadastrar(Jogos: Jogos): void;
    atualizar(Jogos: Jogos): void;
    deletar(id: number): void;

}