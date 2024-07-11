import { Jogos } from "./Jogos";

export class JogoDigital extends Jogos{
    
    private _JogoDigital: string;

	constructor(id: number, nome: string, tipo: number, preco: number, genero: string) {
        super(id, nome, tipo, preco);
		this._JogoDigital = genero;
	}

	public get JogoDigital(): string {
		return this._JogoDigital;
	}

	public set JogoDigital(value: string) {
		this._JogoDigital = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`\nJogo Digital: ${this._JogoDigital}`);
    }
}