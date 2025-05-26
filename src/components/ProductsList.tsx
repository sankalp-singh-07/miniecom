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
	const { products, setProducts, loading, setLoading } = useProducts();

	useEffect(() => {
		setLoading(true);
		const fetchProducts = async () => {
			const res = await fetch('/products.json');
			const data = await res.json();
			setProducts(data);
			setLoading(false);
		};

		fetchProducts();
	}, []);

	if (loading) {
		return <p>LOADING...</p>;
	}

	return (
		<>
			<ProductCard products={products} />
		</>
	);
};

export default ProductsList;
