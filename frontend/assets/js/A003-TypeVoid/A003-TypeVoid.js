"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoa = void 0;
function semRetorno(...args) {
    console.log(args.join(' '));
}
const pessoa = {
    nome: 'Vitor',
    sobrenome: 'Queiroz',
    exibirNome() {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};
exports.pessoa = pessoa;
semRetorno('Vitor', 'Queiroz');
pessoa.exibirNome();
//# sourceMappingURL=A003-TypeVoid.js.map