import { ApolloServer } from "apollo-server";
import graphResolvers from "./graph/resolvers.js";
import graphSchemas from "./graph/schemas.js";

// Create an Apollo server with the schemas and resolvers
const server = new ApolloServer({ typeDefs: graphSchemas, resolvers: graphResolvers });

// Start to listen and run the server
server.listen().then(({ url }) => {
	console.log(`Server ready at ${url} 🚀`);
});
