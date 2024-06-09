"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
var fs_1 = require("fs");
exports.typeDefs = (0, fs_1.readFileSync)('./src/schema/schema.graphql', { encoding: 'utf-8' });
