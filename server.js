const { gql, ApolloServer } = require('apollo-server');

// REVISAO DE CONTEUDO AMANHA

const allUsers = [
  {
    id: 1,
    name: 'Pedro',
    age: 24,
    cash: 13.000,
    active: true
  },
  {
    id: 2,
    name: 'Luiza',
    age: 22,
    cash: 11.000,
    active: true
  }
];

// Create a Query
const typeDefs = gql`
  # Ponto de entrada para pesquisas 
  type User {
    age: Int
    cash: Float
    name: String
    active: Boolean
    id: ID,
  }

  type Query {
   user: User
  }
`;
// Create resolver query
const resolvers = {
  Query: {
   user: () => {
    return allUsers[0];
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