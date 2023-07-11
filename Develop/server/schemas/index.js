//index.js: Export your typeDefs and resolvers.
// const{ApolloServer} = require("apollo-server-express")
// const resolverss = require("./resolvers")
// const typeDefs = require("./typeDefs")
// const resolvers = {
//     Query: {...resolverss},
//     Mutation:{...mutations}
//     };
  
// //the way mutations are currently exported from resolvers ie line 7 we dont have a way to get them on refrence line 11
// const server = new ApolloServer({ typeDefs, resolvers });
// // The `listen` method launches a web server.
// server.listen().then(({ url }) => {
// console.log(`🚀  Server ready at ${url}`);
// });

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };
