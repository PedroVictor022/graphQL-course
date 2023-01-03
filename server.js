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
    id: 1,
    name: 'Macbook M1',
    value: 7999
  },
  {
    id: 2,
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
    users: [User]
    products: [Product]
    user(id: Int, name: String): User!
    product(id: Int, name: String): Product!
  }
`;
// Create resolver query
const resolvers = {
  Query: {
    users: () => {
      return allUsers
    },
    products: () => {
      return allProducts
    },
    /**
     * ARGUMENTS (obj, args)
     */
    user: (_, args) => {
      const { id, name } = args;
      if(id) return allUsers.find(user => user.id === id);
      return allUsers.find(user => user.name === name);
    },
    product: (_, args) => {
      const { id, name } = args;
      if(id) return allProducts.find(product => product.id === id);
      return allProducts.find(product => product.name === name);
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