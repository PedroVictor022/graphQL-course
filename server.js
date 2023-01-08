const { gql, ApolloServer } = require('apollo-server');
// Review content

const users = [
  {
    id: 1,
    name: 'Dexter',
    email: 'dexter1@gmail.com',
    phone_fix: '910201120912'
  },
  {
    id: 1,
    name: 'Dexter',
    email: 'dexter2@gmail.com',
    phone_fix: '910201120913'
  }
]

const typeDefs = gql`
# Prop | Type
  type User {
    id: ID,
    name: String,
    email: String,
    phone: String
  }
  type Query {
    user: User
  }
`;
// Create resolver query
const resolvers = {
  User: {
    phone: (obj) => {
      return obj.phone_fix
    }
  },
  Query: {
   user: () => {
    return users[0];
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