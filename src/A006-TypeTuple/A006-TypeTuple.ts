// Tuple
const dadosCliente1: readonly [number, string] = [1, 'Vitor'];
const dadosCliente2: [number, string, string] = [1, 'Vitor', 'Queiroz'];
const dadosCliente3: [number, string, string?] = [1, 'Vitor'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Vitor', 'Queiroz'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Carlos';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Vitor', 'Queiroz'];
const array2: ReadonlyArray<string> = ['Vitor', 'Queiroz'];

console.log(array1);
console.log(array2);

// Module mode
export default 1;
