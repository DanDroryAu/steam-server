import { readFileSync } from 'fs';

export const typeDefs = readFileSync('./src/schema/schema.graphql', { encoding: 'utf-8' });
