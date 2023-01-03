const { gql, ApolloServer } = require('apollo-server');

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
]

const allProducts = [
  {
    id: 123123,
    name: 'Macbook M1',
    value: 7999
  },
  {
    id: 123124,
    name: 'Macbook M2',
    value: 20899
  }
]

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

  type Product {
    id: ID,
    name: String,
    value: Float
  }

  type Query {
    user: User
    allUser: [User!]!
    product: Product
    allProducts: [Product!]!
  }
`;
// Create resolver query
const resolvers = {
  Query: {
    user: () => {
      return user1;
    },
    allUser: () => {
      return allUsers
    },
    product: () => {
      return allProducts
    },
    allProducts: () => {
      return allProducts
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