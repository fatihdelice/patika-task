import { ApolloServer  } from "apollo-server";
import resolvers from "@resolver";
import typeDefs from "@typeDefs";
import pubsub from "./pubsub";
import db from ".data";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:{
        pubsub,
        db,
    }
});
server.listen().then(({ url }) => console.log(`Apollo server is up at ${url}`));