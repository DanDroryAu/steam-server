import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { print } from 'graphql';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typesArray = loadFilesSync(path.join(__dirname, '../src/api/**/*.graphql'));
const typeDefs = mergeTypeDefs(typesArray);
const printedTypeDefs = print(typeDefs);
fs.writeFileSync('./src/schema/schema.graphql', printedTypeDefs)