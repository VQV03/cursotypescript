"use strict";
const verifyUser = (user, sentValue) => {
    return (user.username === sentValue.username && user.password === sentValue.password);
};
const bdUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joao', password: '123456', permissions: '' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
//# sourceMappingURL=A016-StructuralTyping.js.map