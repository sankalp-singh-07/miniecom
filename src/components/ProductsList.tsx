import { useEffect, useState } from 'react';

export type eachProductType = {
	description: string;
	id: number;
	image: string;
	inStock: boolean;
	name: string;
	price: number;
};

const ProductsList = () => {
	const [products, setProducts] = useState<eachProductType[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const res = await fetch('public/products.json');
			const data = await res.json();
			setProducts(data);
		};

		fetchProducts();
	}, []);
};

export default ProductsList;
