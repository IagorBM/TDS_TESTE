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

cadastraPessoa("Iagor",18);
cadastraPessoa("Centauri A",23);
cadastraPessoa("Centauri B",24);
cadastraPessoa("Centauri C",43);
cadastraPessoa("Centauri D",56);
cadastraPessoa("Centauri E",12);
cadastraPessoa("Centauri F",76);
cadastraPessoa("Centauri G",25);
cadastraPessoa("Proxima Centauri ",14);


console.log(consultaTodasAsPessoa());