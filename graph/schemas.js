import { gql } from "apollo-server";

/**
 * Define the different schemas we will need for the app to work
 */
const graphSchemas = gql`
	type Book {
		id: String
		title: String
		authors: [String]
		image: String
		language: String
		link: String
		price: Float
		currency: String
	}

	type Query {
		books(q: String!, start: Int, limit: Int): [Book]
	}
`;

export default graphSchemas;
