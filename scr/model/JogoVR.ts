import { Jogos } from "./Jogos";

export class JogoVR extends Jogos{
    
    private _JogoVR: string;

	constructor(id: number, nome: string, tipo: number, preco: number, genero: string) {
        super(id, nome, tipo, preco);
		this._JogoVR = genero;
	}

	public get genero(): string {
		return this._JogoVR;
	}

	public set genero(value: string) {
		this._JogoVR = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`\nJogo VR: ${this._JogoVR}`);
    }
}