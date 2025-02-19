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
    consultaTodasAsPessoa,
    deletaPessoa,
    consultaPessoaPeloID,
    atualizaPessoa
} 

function consultaPessoaPeloID(id){
    return pessoas.filter(item => item.id == id)
}

function atualizaPessoa(id,nome,idade){

}

function deletaPessoa(id){
    var teveRetorno = true;
    for(let i=0; i<pessoas.length;i++){
        if(pessoas[i].id == id){
            pessoas.splice(i,1);
            return "deletado";
        }else {
            teveRetorno = false;
        }
    }

    //pessoas.forEach((item,index)=>{})
        // representação do "FOR" utilizando a propiedade "filter" do   Arraylist para procurar
    /*
        const inicio2 = pessoas.filter((item,index)=> {
            item.id == id ?
            pessoas.splice(index,1 )
            : undefined
        });
    */

    /*const inicio = pessoas.filter((item,index)=>{
        //if (item.id == id){
         //   return index
        //}

    })

    if(inicio.length < 0){
        return "Código da pessoa inválido!"
    }
    else{
        pessoas.splice(inicio,1)
        return "pessoa deletada com sucesso"
    }*/
}


console.log(consultaTodasAsPessoa());