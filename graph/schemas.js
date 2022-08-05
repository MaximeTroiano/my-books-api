import { gql } from "apollo-server";

/**
 * Define the different schemas we will need for the app to work
 */
const graphSchemas = gql`
	type Book {
		id: String
		title: String
		authors: [String]
	}

	type Query {
		books(q: String!): [Book]
	}
`;

export default graphSchemas;
