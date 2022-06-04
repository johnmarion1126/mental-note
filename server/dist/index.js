"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const main = async () => {
    const app = (0, express_1.default)();
    app.listen(process.env.PORT, () => {
        console.log(`server started on localhost:${process.env.PORT}`);
    });
};
main().catch((e) => {
    console.error(e);
});
//# sourceMappingURL=index.js.map