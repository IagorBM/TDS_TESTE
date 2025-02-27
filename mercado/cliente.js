const compra = [];
var id_cliente = 1;

function cadastraCliente(nome,cpf){
    var cliente = {
        id: id_cliente++,
        nome: nome,
        cpf: cpf
    };
    compra.push(cliente);
    return cliente
}

module.exports={
    cadastraCliente
}