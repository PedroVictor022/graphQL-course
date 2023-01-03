const { gql, ApolloServer } = require('apollo-server');

// Create a Query
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Create resolver query
const resolvers = {
  Query: {
    hello: () => {
      return 'Hello world!'
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});