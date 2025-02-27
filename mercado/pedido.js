const compra = [];
var id_pedido = 1;

function pedido(id_produto,id_cliente,quantidade,total){
    var pedido = {
        id: id_pedido++,
        id_produto: id_produto,
        id_cliente: id_cliente,
        quantidade: quantidade,
        total: total
    }
    compra.push(pedido);
    return pedido;
}

 function fassaPedido(id){
    return compra.filter(item => item.id == id)
 }

function atualizaPedido(id,id_produto,id_cliente,quantidade,total){
    var teveRetorno = true;
    for(let i=0;i<compra.length;i++){
         if(mercado[i].id == id){
            mercado[i].id_produto = id_produto;
            mercado[i].id_cliente = id_cliente;
            mercado[i].quantidade = quantidade;
            mercado[i].total = total;
            return mercado[i]
         } else {
            teveRetorno = false
         }
    }
}

 module.exports={
    pedido,
    fassaPedido,
    atualizaPedido
 }