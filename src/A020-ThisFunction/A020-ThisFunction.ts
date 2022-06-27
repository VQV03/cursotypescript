export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

funcao.call(new Date(), 'Vitor', 19);
funcao.apply(new Date(), ['Vitor', 19]);
