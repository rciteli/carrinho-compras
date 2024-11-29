// Projeto para Carrinho de Compras online onde pode-se adicionar items e reiniciar a lista

let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';


//função para adicionar produtos
function adicionar() {
    let item = document.getElementById('produto').value;
    //posicao 0 do array especifica tudo antes do referencial
    let itemNome = item.split('-')[0];
    //posicao 1 especifica tudo depois do referencial
    let itemValor = item.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //calcula o subtotal por item
    let valorTotalItem = (itemValor * quantidade);
    //adicionar no carrinho
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${itemNome} <span class="texto-azul"> R$${valorTotalItem}</span></section>`
    //atualizar o valor total
    totalGeral = totalGeral + valorTotalItem;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}


//função que limpa e reinicia o carrinho
function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}