const pessoa = require("./pesssoa.js");

pessoa.cadastraPessoa("Iagor",18);
pessoa.cadastraPessoa("Centauri A",23);
pessoa.cadastraPessoa("Centauri B",24);
pessoa.cadastraPessoa("Centauri C",43);
pessoa.cadastraPessoa("Centauri D",56);
pessoa.cadastraPessoa("Centauri E",12);
pessoa.cadastraPessoa("Centauri F",76);
pessoa.cadastraPessoa("Centauri G",25);
pessoa.cadastraPessoa("Proxima Centauri ",14);


console.log(pessoa.consultaTodasAsPessoa());