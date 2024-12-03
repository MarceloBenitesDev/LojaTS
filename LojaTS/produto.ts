export class Produto {
    public nome: string;
    protected preco: string;
    protected qtestoque: number;

    constructor(
        nome: string, preco: string, qtestoque: number
    ) {
        this.nome = nome;
        this.preco = preco;
        this.qtestoque = qtestoque;
    }

    exibirInformacoes(): void {
        console.log(`Nome do produto: ${this.nome}; Preço do produto: ${this.preco} R$; Quantidade em estoque: ${this.qtestoque} unidades.`)
    }

    atualizarEstoque(novoestoque: number): void {
        this.qtestoque = novoestoque <= 0 ? 0 : novoestoque;
    }
}

const produto = new Produto("Tinta Coral", "345.90", 34);
produto.exibirInformacoes();
produto.atualizarEstoque;