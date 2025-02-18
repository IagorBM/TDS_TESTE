//CRUD
//CREATE  - CRIAR
//READER - LER
//UPDATED - ATUALIZAR
//DELETE - DELETAR

//ID, NOME, IDADE
const pessoas = [];
var idSeq = 1;


function cadastraPessoa(nome,idade){
    var pessoa = {id: idSeq++, nome: nome, idade: idade};
    pessoas.push(pessoa);
    return pessoa;
}

function consultaTodasAsPessoa(){
    return pessoas;
}

module.exports = {
    cadastraPessoa,
    consultaTodasAsPessoa
} 



console.log(consultaTodasAsPessoa());