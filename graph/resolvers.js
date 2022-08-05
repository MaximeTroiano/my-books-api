import { getBooks } from "../controllers/books.js";

// fetch functions for the different queries
const graphResolvers = {
	Query: {
		books: getBooks,
	},
};

export default graphResolvers;
