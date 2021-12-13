export const getGifs = async (categ) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		categ
	)}&limit=10&api_key=lIqK1PlWs7BBmhEHFJ2IMGghrGhOjStX`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url,
		};
	});

	return gifs;
};
