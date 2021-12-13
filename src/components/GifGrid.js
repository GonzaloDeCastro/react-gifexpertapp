import React /*, { useState, useEffect } */ from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categ }) => {
	const { data: images, loading } = useFetchGifs(categ);

	return (
		<>
			<h3 className="animate__fadeIn">{categ}</h3>
			{loading && <p className="animate_animated animate_flash">Loading...</p>}
			<div className="card-grid">
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
