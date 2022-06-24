// Void e o oposto de any
// Usar o type void em funcoes que nao retornam valor

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Vitor',
  sobrenome: 'Queiroz',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Vitor', 'Queiroz');
pessoa.exibirNome();

export { pessoa };
