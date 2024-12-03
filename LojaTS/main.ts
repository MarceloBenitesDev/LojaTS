import { Produto } from "./produto";
import { Eletronico } from "./eletronico";
import { Alimento } from "./alimento";
import { Loja } from "./loja";

const lojadombk = new Loja();

const produto = new Produto("Tinta Coral", "345.90", 34);
const eletronico = new Eletronico("Geladeira", "3000.89", 12, 220);
const alimento = new Alimento("Frango Sadia", "43.30", 35, "2025-01-23");

lojadombk.adicionar(produto);
lojadombk.adicionar(eletronico);
lojadombk.adicionar(alimento);

lojadombk.exibirProdutos();
const produto2 = new Produto("Coca", "12.00", 45);
lojadombk.adicionar(produto2);
lojadombk.remover(produto2);
lojadombk.exibirProdutos;