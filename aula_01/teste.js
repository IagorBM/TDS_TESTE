//soma de dois valores
function somaDeDoisValores(a,b) {  
    return a + b;
};
console.log("A soma de de 4 e 2 é ",somaDeDoisValores(4,2));


//multiplicação de dois valores
function multiplicacao_de_dois_valores(a,b) {
    return a*b;
}
console.log("A multiplicação de 4 + 8 é :", multiplicacao_de_dois_valores(4,8))


//divisão de dois valores
function DivisaoDeDoisValores(a,b) {   
    return a/b;
}
console.log("A divisão entre 5 e 10 é", DivisaoDeDoisValores(10,5));

//trabaiando com array list

const data = []

data.push(2)
data.push(1)
data.push(6)
data.push(5)
data.push(2)
data.push(43)


console.log(data);

data.splice(4,1)

console.log(data)

//utilizando objetos

const pessoa = {
    id: 1,
    nome: "Iagor",
    idade: 18
}




module.exports={
    somaDeDoisValores,
    multiplicacao_de_dois_valores,
    DivisaoDeDoisValores,
}