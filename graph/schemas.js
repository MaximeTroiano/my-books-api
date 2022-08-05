import { gql } from "apollo-server";

/**
 * Define the different schemas we will need for the app to work
 */
const graphSchemas = gql`
	type Book {
		title: String
		author: String
	}

	type Query {
		books: [Book]
	}
`;

export default graphSchemas;
