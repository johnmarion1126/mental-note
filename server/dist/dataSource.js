"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const constants_1 = require("./utils/constants");
const Note_1 = __importDefault(require("./entities/Note"));
const dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: constants_1.DB_HOST,
    port: parseInt(constants_1.DB_PORT, 10),
    username: constants_1.DB_USERNAME,
    password: constants_1.DB_PASSWORD,
    entities: [Note_1.default],
});
exports.default = dataSource;
//# sourceMappingURL=dataSource.js.map