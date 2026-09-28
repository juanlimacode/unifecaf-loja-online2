// --- CÓDIGO DO ARQUIVO CARRINHO.JS ---
const carrinhoDeCompras = [];

function adicionarProduto(nome, preco, quantidade) {
    carrinhoDeCompras.push({ nome, preco, quantity: quantidade });
    console.log(`🛒 Sucesso: ${quantidade}x "${nome}" adicionado!`);
}

function calcularTotalDoCarrinho() {
    return carrinhoDeCompras.reduce((total, item) => total + (item.preco * item.quantity), 0);
}

console.log("--- Testando Carrinho ---");
adicionarProduto("Teclado Mecânico RGB", 250.00, 1);
adicionarProduto("Mouse Gamer Wireless", 120.00, 2);
console.log(`💰 Valor total: R$ ${calcularTotalDoCarrinho().toFixed(2)}`);
