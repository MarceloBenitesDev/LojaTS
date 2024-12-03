import { Produto } from "./produto";

export class Eletronico extends Produto {
    protected voltagem: number;

    constructor(
        nome: string, preco: string, qtestoque: number,
        voltagem: number
    ) {
        super(nome, preco, qtestoque);
        this.voltagem = voltagem;
    }

    exibirInformacoes(): void {
        super.exibirInformacoes();
        console.log(`Nome do eletronico: ${this.nome}; Preco do eletronico: ${this.preco} R$; Quantidade em estoque: ${this.qtestoque} unidades; Voltagem do eletronico: ${this.voltagem} Volts.`)
    }
}

const eletronico = new Eletronico("Geladeira", "3000.89", 12, 220);
eletronico.exibirInformacoes();