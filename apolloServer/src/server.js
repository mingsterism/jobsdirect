import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schemas";
import mocks from "./mocks";

const dataSources = {};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
  introspection: true,
  playground: true,
  context: { dataSources }
});

server.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000/graphql`)
);
