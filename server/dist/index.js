"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const main = async () => {
    const app = (0, express_1.default)();
    app.listen(4000, () => {
        console.log('server started on localhost:4000');
    });
};
main().catch((e) => {
    console.error(e);
});
//# sourceMappingURL=index.js.map