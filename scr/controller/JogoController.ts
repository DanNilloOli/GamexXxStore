import { Jogos } from "../model/Jogos";
import { JogoVR } from "../model/JogoVR";
import { JogoDigital } from "../model/JogoDigital";
import { JogosRepository } from "../repository/JogosRepository";

export class JogoController implements JogosRepository {
    private listaJogos: Array<Jogos> = new Array<Jogos>();
    private id: number = 0;  

    procurarPorId(id: number): Jogos | null {
        let buscaJogos = this.buscarNoArray(id);

        if (buscaJogos !== null) {
            buscaJogos.visualizar();
            return buscaJogos;
        } else {
            console.log("\nO jogo não foi encontrado!");
            return null;
        }
    }

    listarTodas(): void {
        for (let jogo of this.listaJogos) {
            jogo.visualizar();
        }
    }

    cadastrar(jogo: Jogos): void {
        this.listaJogos.push(jogo);
        console.log("\nO jogo foi adicionado com sucesso!");
    }

    atualizar(jogo: Jogos): void {
        let buscaJogos = this.buscarNoArray(jogo.id);

        if (buscaJogos !== null) {
            this.listaJogos[this.listaJogos.indexOf(buscaJogos)] = jogo;
            console.log("\nO Jogo foi atualizado!");
        } else {
            console.log("\nO Jogo não foi encontrado!");
        }
    }

    deletar(id: number): void {
        let buscaJogos = this.buscarNoArray(id);

        if (buscaJogos !== null) {
            this.listaJogos.splice(this.listaJogos.indexOf(buscaJogos), 1);
            console.log("\nO Jogo foi excluído!");
        } else {
            console.log("\nO Jogo não foi encontrado!");
        }
    }

    public gerarId(): number {
        return ++this.id;  // Incrementa e retorna o novo ID
    }

    public buscarNoArray(id: number): Jogos | null {
        for (let jogo of this.listaJogos) {
            if (jogo.id === id) {
                return jogo;
            }
        }
        return null;
    }
}