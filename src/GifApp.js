import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {
	const [categories, setCategories] = useState(['Digimon']);

	/*     const handleAdd = () =>{
      //  setCategories([...categories, 'Pokemon'])
        setCategories(cat => [...categories, 'Pokemon'])
    } */
	return (
		<>
			<h1>GifApp</h1>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>
				{categories.map((categ) => {
					return <GifGrid key={categ} categ={categ} />;
				})}
			</ol>
		</>
	);
};
