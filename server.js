const { gql, ApolloServer } = require('apollo-server');
// Review content

const users = [
  {
    id: 1,
    name: 'Dexter',
    email: 'dexter1@gmail.com',
    phone_fix: '910201120912',
    profile: 1
  },
  {
    id: 2,
    name: 'Dexter 2',
    email: 'dexter2@gmail.com',
    phone_fix: '910201120913',
    profile: 2
  }
]

const profiles = [
  {
    id: 1,
    description: 'ADMIN'
  },
  {
    id: 2,
    description: 'NORMAL'
  }
]

const typeDefs = gql`
# Prop | Type
  type User {
    id: ID,
    name: String,
    email: String,
    phone: String,
    profile: Profile,
  }
  type Profile {
    id: Int,
    description: String
  }
  type Query {
    user(id: Int): User
    profiles: [Profile]
  }
`;
// Create resolver query
const resolvers = {
  User: {
    phone: (obj) => {
      return obj.phone_fix
    },
    profile: ({id}) => {
      return profiles.find(user => user.id === id)
    }
  },
  Query: {
   user: (_, args) => {
    return users.find(db => db.id === args.id)
   },
   profiles: () => {
    return profiles;
   }
  }
}
// Review 11/01/23
console.log(resolvers);

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
})