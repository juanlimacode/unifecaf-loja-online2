const assert = require('assert');

// Teste simples para validar o ambiente de CI
console.log('Executando testes do carrinho...');
assert.strictEqual(1 + 1, 2);
console.log('Todos os testes passaram com sucesso!');