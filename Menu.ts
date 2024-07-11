import readlinesync = require("readline-sync");
import { colors } from "./scr/util/Colors";


export function main() {

    let opcao: number;

    while (true) {

        console.log(colors.bg.black, colors.fg.green,
                    "|||||||||||||||||||||||||||||||||||||||||||||||||||||");
        console.log("-----------------------------------------------------");
        console.log("                Gamer xXx Store                      ");
        console.log("-----------------------------------------------------");
        console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||");
        console.log("                                                     ");
        console.log("            1 - Adicionar Jogo                       ");
        console.log("            2 - Listar Catálogo                      ");
        console.log("            3 - Buscar Produto por Id                ");
        console.log("            4 - Atualizar Dados do Jogo              ");
        console.log("            5 - Deletar Jogo                          ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||");
        console.log("-----------------------------------------------------",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 6) {
            console.log(colors.fg.greenstrong,
                "\nGamer xXx Store - Catálogo nível hardcore!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nAdicionar Jogo\n\n", colors.reset);


                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar Catálogo\n\n", colors.reset);
   
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nBuscar Produto por Id\n\n", colors.reset);


                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar Dados do Jogo\n\n", colors.reset);
    

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nDeletar Jogo\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpa!!! Opção Inválida...\n", colors.reset);

                keyPress()
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