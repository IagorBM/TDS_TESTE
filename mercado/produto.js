const compra = [];
var id_prod = 1;

function cadastraProduto(nome,preco){
    var produto = {
        id: id_prod++,
        nome: nome,
        preco: preco
    }
    compra.push(produto);
    return produto;
}

module.exports={
    cadastraProduto
}