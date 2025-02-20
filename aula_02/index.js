function soma(a,b){
    return a + b;
}

function subitracao(a,b){
    return a - b;
}

function multiplicacao_de_dois_valores(a,b) {
    return a*b;
}

function DivisaoDeDoisValores(a,b) {   
    return a/b;
}

function pessoa(){
    return {
        id: 1,
        nome: "iagor",
        idade: 18
    }
}

module.exports={
    soma,
    multiplicacao_de_dois_valores,
    DivisaoDeDoisValores,
    subitracao,
    pessoa
}