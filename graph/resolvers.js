import graphMockdata from "./mockdata.js";

// fetch functions for the different queries
const graphResolvers = {
	Query: {
		books: () => graphMockdata.books,
	},
};

export default graphResolvers;
