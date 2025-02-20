const index = require("./index");


test("soma de dois valores",()=>{
    expect(index.soma(1,12)).toBe(13);
});
test("Subtração de dois valores",()=>{
    expect(index.subitracao(5,10)).toBe(-5);
});
//frescura do carai, tem que especificar até se o resultado é negativo ou não só pq um número veio na frente do outro
test("a multiplicação desses dois valores é",()=>{
    expect(index.multiplicacao_de_dois_valores(5,5)).toBe(25);
})
test("a divisão desses dois valores é",()=>{
    expect(index.DivisaoDeDoisValores(4,2)).toBe(2);
})

test("extrativicação da pessoa concluído",()=>{
    expect(index.pessoa()).toEqual({
        id: 1,
        nome: "iagor",
        idade: 18 
    });
})