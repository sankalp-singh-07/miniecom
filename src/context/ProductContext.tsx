import React, { createContext, useContext, useState } from 'react';
import type { eachProductType } from '../components/ProductsList';

type ProductContextType = {
	products: eachProductType[];
};

const ProductContext = createContext<ProductContextType>({
	products: [],
});

type ProductProviderProps = {
	children: React.ReactNode;
};

const ProductProvider = ({ children }: ProductProviderProps) => {
	const [products, setProducts] = useState<eachProductType[]>([]);
	const value = { products };

	return (
		<ProductContext.Provider value={value}>
			{children}
		</ProductContext.Provider>
	);
};

export const useProducts = useContext(ProductContext);
