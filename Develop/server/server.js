const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');

const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');

// const routes = require('./routes');
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
}
// if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);

});
startApolloServer();

// need help figuring out searchBooks and savedBooks 
// ??? SAVE_BOOK ??? is this mutation missing from doc and need added to backend? or do the routes need left back in and use a mixed config of controller and graphql