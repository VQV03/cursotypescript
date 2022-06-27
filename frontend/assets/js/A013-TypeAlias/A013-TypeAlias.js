"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCorPreferida = void 0;
const pessoa = {
    idade: 30,
    nome: 'Vitor',
    salario: 200000,
};
function setCorPreferida(pessoa, cor) {
    return { ...pessoa, corPreferida: cor };
}
exports.setCorPreferida = setCorPreferida;
console.log(setCorPreferida(pessoa, 'Azul'));
console.log(pessoa);
//# sourceMappingURL=A013-TypeAlias.js.map