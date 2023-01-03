const { gql, ApolloServer } = require('apollo-server');

// Create a Query
const typeDefs = gql`
  # Ponto de entrada para pesquisas 
  type Query {
    age: Int
    cash: Float
    name: String
    active: Boolean
    id: ID,
    techs: [String!]!
  }
`;

// Create resolver query
const resolvers = {
  Query: {
    age: () => {
      return 21;
    },
    cash: () => {
      return 7.800;
    },
    name: () => {
      return 'Pedro Victor';
    },
    active: () => {
      return true;
    },
    id: () => {
      return 9;
    },
    techs: () => {
      return ['Javascript', 'C++', 'Typescript'];
    }
  }
}

console.log(resolvers);

const server = new ApolloServer({
  typeDefs, 
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
})