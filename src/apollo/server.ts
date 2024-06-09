import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const apolloServer = {
    server,
    start: async () => {
        const { url } = await startStandaloneServer(server, {
            listen: { port: 4000 },
        });

        console.log(`🚀  Server ready at: ${url}`);
    }
}

export default apolloServer;