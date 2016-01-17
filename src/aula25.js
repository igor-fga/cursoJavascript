//usar o objeto Pessoa

var pessoa = new Pessoa("Igor", "Guilherme");
console.log(pessoa);
console.log(pessoa.nomeCompleto() );

pessoa.setNome("Carol");
console.log(pessoa.nomeCompleto());

console.log(pessoa.getSobrenome());
