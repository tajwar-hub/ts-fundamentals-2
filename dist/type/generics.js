"use strict";
// interface Response {
//     // data: any;
//     // data: string | number | boolean | object | null;
//     status: number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
const transactionResponse = {
    data: "Transaction successful",
    status: 200
};
const transactionStatus = {
    data: false,
    status: 200
};
const transactionAmount = {
    data: 215,
    status: 401
};
function getLength(array) {
    return array.length;
}
getLength(['', '', '3']);
getLength([4, 6]);
//# sourceMappingURL=generics.js.map