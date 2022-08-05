import fetch from "node-fetch";

const URL = "https://www.googleapis.com/books/v1/volumes?";

const transformBook = ({ id, volumeInfo, saleInfo }) => ({
	id,
	title: volumeInfo.title,
	subtitle: volumeInfo.subtitle,
	authors: volumeInfo.authors || [],
	image: volumeInfo.imageLinks.thumbnail,
	language: volumeInfo.language,
	link: saleInfo.buyLink,
	price: saleInfo.buyLink ? saleInfo.listPrice.amount : 0,
	currency: saleInfo.buyLink ? saleInfo.listPrice.currencyCode : null,
});

export const getBooks = async (_, { q = "", start = 0, limit = 10 }) => {
	if (!q) return [];

	const response = await fetch(
		URL +
			new URLSearchParams({
				q,
				startIndex: start,
				maxResults: limit,
			})
	);

	const { items } = await response.json();
	return items.map(transformBook);
};
