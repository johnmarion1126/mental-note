"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const dataSource_1 = __importDefault(require("./dataSource"));
const constants_1 = require("./utils/constants");
const hello_1 = __importDefault(require("./resolvers/hello"));
const main = async () => {
    await dataSource_1.default.initialize();
    const app = (0, express_1.default)();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [hello_1.default],
        }),
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.listen(constants_1.PORT, () => {
        console.log(`server started on localhost:${constants_1.PORT}`);
    });
};
main().catch((e) => {
    console.error(e);
});
//# sourceMappingURL=index.js.map