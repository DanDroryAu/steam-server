"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var query_1 = require("./query");
exports.resolvers = {
    Query: query_1.queryResolvers,
    Mutation: {},
    Subscription: {}
};
