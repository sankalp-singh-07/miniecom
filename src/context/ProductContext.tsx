import React, { createContext, useContext, useState } from 'react';
import type { eachProductType } from '../components/ProductsList';

type ProductContextType = {
	products: eachProductType[];
	setProducts: React.Dispatch<React.SetStateAction<eachProductType[]>>;
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductContext = createContext<ProductContextType>({
	products: [],
	setProducts: () => {},
	loading: false,
	setLoading: () => {},
});

type ProductProviderProps = {
	children: React.ReactNode;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
	const [products, setProducts] = useState<eachProductType[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const value = { products, setProducts, loading, setLoading };

	return (
		<ProductContext.Provider value={value}>
			{children}
		</ProductContext.Provider>
	);
};

export const useProducts = () => useContext(ProductContext);
