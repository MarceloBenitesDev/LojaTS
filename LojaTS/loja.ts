import { Produto } from "./produto";
import { Eletronico } from "./eletronico";
import { Alimento } from "./alimento";

export class Loja {
    public produtos: Produto[] = [];

    adicionar(novoproduto: Produto): void {
        this.produtos.push(novoproduto);
        console.log(`O produto ${novoproduto.nome} foi adicionado a loja.`)
    }

    remover(novoproduto: Produto): void {
        const index = this.produtos.indexOf(novoproduto);
        if (index > -1) {
            this.produtos.splice(index, 1);
            console.log(`O produto ${novoproduto.nome} foi removido da loja.`)
        } else {
            console.log(`Produto não encontrado.`)
        }
    }

    exibirProdutos(): void {
        if (this.produtos.length === 0) {
            console.log(`Produto indisponivel.`);
        } else {
            console.log(`Estes são os produtos da loja: `)
            this.produtos.forEach(novoproduto => {
                console.log(`${novoproduto.nome}`);
            });
        }
    }
}