import fetch from "node-fetch";

const URL = "https://www.googleapis.com/books/v1/volumes?";

const transformBook = ({ id, volumeInfo }) => ({
	id,
	title: volumeInfo.title,
	subtitle: volumeInfo.subtitle,
	authors: volumeInfo.authors || [],
});

export const getBooks = async (_, { q = "", startIndex = 0, maxResults = 10 }) => {
	if (!q) return [];

	const response = await fetch(
		URL +
			new URLSearchParams({
				q,
				startIndex,
				maxResults,
			})
	);

	const { items } = await response.json();
	return items.map(transformBook);
};
