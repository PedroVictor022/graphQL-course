const { gql, ApolloServer } = require('apollo-server');
// Review content

// Create a Query
const typeDefs = gql`
  # Ponto de entrada para pesquisas 
  type Query {
    # Props: Types 
    age: Int
    cash: Float
    name: String
    active: Boolean
    id: ID,
  }
`;
// Create resolver query
const resolvers = {
  Query: {
    // Cada query tem q ser denomida como funcao 
    age: () => {
      return 21;
    },
    cash: () => {
      return 13.900;
    },
    name: () => {
      return 'Pedro';
    },
    active: () => {
      return true;
    },
    id: () => {
      return 01;
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