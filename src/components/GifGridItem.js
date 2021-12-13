import React from 'react';

export const GifGridItem = ({ url, title }) => {
	return (
		<div className="card animate__fadeIn">
			<img src={url} alt="Tittle"></img>
			<p>{title}</p>
		</div>
	);
};
