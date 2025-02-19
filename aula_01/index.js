const carai = require("./pesssoa.js");

carai.cadastraPessoa("Iagor",18);
carai.cadastraPessoa("Centauri A",23);
carai.cadastraPessoa("Centauri B",24);
carai.cadastraPessoa("Centauri C",43);
carai.cadastraPessoa("Centauri D",56);
carai.cadastraPessoa("Centauri E",12);
carai.cadastraPessoa("Centauri F",76);
carai.cadastraPessoa("Centauri G",25);
carai.cadastraPessoa("Proxima Centauri ",14);

console.log(carai.consultaTodasAsPessoa());
console.log(carai.deletaPessoa(6));
console.log(carai.consultaTodasAsPessoa());