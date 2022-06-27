"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addOrConcat(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    return `${a}${b}`;
}
console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat(10, '20'));
console.log(addOrConcat('10', 20));
console.log(addOrConcat(true, true));
exports.default = 1;
//# sourceMappingURL=A011-UnionType.js.map