type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Vitor',
  sobrenome: 'Queiroz',
  idade: 19,
};

const nhac: Intersecao = 'A';

console.log(pessoa);
console.log(nhac);

// Module mode
export { pessoa };
