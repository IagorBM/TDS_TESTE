const mercado = require("./mercado");



test("carai",()=>{
    expect(mercado.cadastraProduto()).toEqual({
        id:1,
        nome:"peixe",
        cpf: 7.20
    });
})