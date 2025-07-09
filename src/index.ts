import express from 'express';
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4';

async function init() {
    const app = express();
    const PORT = Number(process.env.PORT) || 8000;

    app.use(express.json());
    
    // create Apollo Server
    const server = new ApolloServer({
        typeDefs: '',
        resolvers: {}
    });

    // Start the server
    await server.start();

    app.get('/', (req, res) => {
        res.json({ message: 'GraphQL server is running' });
    });

    app.use('/graphql', expressMiddleware(server));

    app.listen(PORT, () => {
        console.log(`Server is running on port - ${PORT}`);
    });
}

init();