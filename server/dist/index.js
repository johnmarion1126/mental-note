"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const constants_1 = require("./utils/constants");
const dataSource_1 = __importDefault(require("./dataSource"));
dotenv_1.default.config();
const main = async () => {
    await dataSource_1.default.initialize();
    const app = (0, express_1.default)();
    app.listen(constants_1.PORT, () => {
        console.log(`server started on localhost:${constants_1.PORT}`);
    });
};
main().catch((e) => {
    console.error(e);
});
//# sourceMappingURL=index.js.map