// --- CÓDIGO DO ARQUIVO CUPOM.JS ---
const cuponsDisponiveis = {
    "FECAF10": 0.10,
    "PROMO20": 0.20
};

function aplicarDescontoNoTotal(valorCompra, nomeCupom) {
    const descontoPercentual = cuponsDisponiveis[nomeCupom.toUpperCase()];
    if (descontoPercentual) {
        const valorFinal = valorCompra * (1 - descontoPercentual);
        console.log(`🎫 Cupom "${nomeCupom}" aplicado!`);
        return valorFinal;
    }
    console.log(`❌ Cupom inválido.`);
    return valorCompra;
}

console.log("--- Testando Cupons ---");
const totalFinal = aplicarDescontoNoTotal(370.00, "FECAF10");
console.log(`🏁 Total a pagar: R$ ${totalFinal.toFixed(2)}`);
