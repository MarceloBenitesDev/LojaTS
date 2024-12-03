import { Produto } from "./produto";

export class Alimento extends Produto {
    protected datavalidade: string;

    constructor(
        nome: string, preco: string, qtestoque: number,
        datavalidade: string
    ) {
        super(nome, preco, qtestoque);
        this.datavalidade = datavalidade;
    }

    exibirInformacoes(): void {
        super.exibirInformacoes();
        console.log(`Nome do alimento: ${this.nome}; Preco do alimento: ${this.preco} R$; Quantidade em estoque: ${this.qtestoque} unidades; Data de validade do alimento: ${this.datavalidade}.`)
    }
}

const alimento = new Alimento("Frango Sadia", "43.30", 35, "2025-01-23");
alimento.exibirInformacoes();