import { useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from './ProductCard';

export type eachProductType = {
	description: string;
	id: number;
	image: string;
	inStock: boolean;
	name: string;
	price: number;
};

const ProductsList = () => {
	const { products, setProducts } = useProducts();

	useEffect(() => {
		const fetchProducts = async () => {
			const res = await fetch('public/products.json');
			const data = await res.json();
			setProducts(data);
		};

		fetchProducts();
	}, []);

	return (
		<>
			<ProductCard products={products} />
		</>
	);
};

export default ProductsList;
