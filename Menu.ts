import readlinesync = require("readline-sync");
import { colors } from "./scr/util/Colors";
import { JogoDigital } from "./scr/model/JogoDigital";
import { JogoVR } from "./scr/model/JogoVR";
import { JogoController } from "./scr/controller/JogoController";

export function main() {
    let opcao, id, tipo, preco: number;
    let nome, genero: string;
    let tipoJogo = ['JogoVR', 'JogoDigital'];

    const jogoController: JogoController = new JogoController();

    while (true) {
        console.log(colors.bg.black, colors.fg.green,
                    "|||||||||||||||||||||||||||||||||||||||||||||||||||||");
        console.log("-----------------------------------------------------");
        console.log("                Rocketman Store                      ");
        console.log("-----------------------------------------------------");
        console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||");
        console.log("                                                     ");
        console.log("            1 - Adicionar Jogo                       ");
        console.log("            2 - Listar Catálogo                      ");
        console.log("            3 - Buscar Produto por Id                ");
        console.log("            4 - Atualizar Dados do Jogo              ");
        console.log("            5 - Deletar Jogo                         ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||");
        console.log("-----------------------------------------------------", colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 6) {
            console.log(colors.fg.greenstrong,
                "\nRocketman Store - Catálogo nível hardcore!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nAdicionar Jogo\n\n", colors.reset);

                nome = readlinesync.question("Digite o Nome do Jogo: ");
                tipo = readlinesync.keyInSelect(tipoJogo, "", { cancel: false }) + 1;
                preco = readlinesync.questionFloat("Digite o preco: ");
                genero = readlinesync.question("Digite o gênero do jogo: ");

                if (tipo !== 1) {
                    jogoController.cadastrar(new JogoVR(jogoController.gerarId(), nome, tipo, preco, genero));
                } else {
                    jogoController.cadastrar(new JogoDigital(jogoController.gerarId(), nome, tipo, preco, genero));
                }

                keyPress();
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar Catálogo\n\n", colors.reset);

                jogoController.listarTodas();
                keyPress();
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nBuscar Jogo por Id\n\n", colors.reset);

                id = readlinesync.questionInt("Digite o Id do Jogo: ");
                const jogoEncontrado = jogoController.procurarPorId(id);
                if (jogoEncontrado) {
                    console.log(jogoEncontrado);
                } else {
                    console.log("Jogo não encontrado!");
                }
                keyPress();
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar Dados do Jogo\n\n", colors.reset);

                id = readlinesync.questionInt("Digite o Id do Jogo: ");
                const jogo = jogoController.buscarNoArray(id);

                if (jogo !== null) {
                    nome = readlinesync.question("Digite o Nome do Jogo: ");
                    preco = readlinesync.questionFloat("Digite o preco: ");
                    genero = readlinesync.question("Digite o gênero do jogo: ");

                    if (jogo instanceof JogoVR) {
                        jogoController.atualizar(new JogoVR(id, nome, jogo.tipo, preco, genero));
                    } else if (jogo instanceof JogoDigital) {
                        jogoController.atualizar(new JogoDigital(id, nome, jogo.tipo, preco, genero));
                    }
                } else {
                    console.log("Jogo não Encontrado!");
                }

                keyPress();
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nDeletar Jogo\n\n", colors.reset);

                id = readlinesync.questionInt("Digite o Id do Jogo: ");
                jogoController.deletar(id);
                keyPress();
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpa!!! Opção Inválida...\n", colors.reset);
                keyPress();
                break;
        }
    }
}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
