import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const port = Number.parseInt(process.env.PORT) || 4000;

const apolloServer = {
    server,
    start: async () => {
        const { url } = await startStandaloneServer(server, {
            listen: { port },
        });

        console.log(`🚀  Server ready at: ${url}`);
    }
}

export default apolloServer;