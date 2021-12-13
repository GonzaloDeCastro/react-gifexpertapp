import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categ) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getGifs(categ).then((imgs) => {
			setTimeout(() => {
				setState({
					data: imgs,
					loading: false,
				});
			}, 3000);
		});
	}, [categ]);

	return state;
};
