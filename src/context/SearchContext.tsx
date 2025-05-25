import React, { createContext, useContext, useState } from 'react';

type SearchContextTypes = {
	input: string;
	setInputGlobal: React.Dispatch<React.SetStateAction<string>>;
};

const SearchContext = createContext<SearchContextTypes>({
	input: '',
	setInputGlobal: () => {},
});

type SearchProviderProps = {
	children: React.ReactNode;
};

export const SearchProvider = ({ children }: SearchProviderProps) => {
	const [input, setInputGlobal] = useState<string>('');
	const value = { input, setInputGlobal };

	return (
		<SearchContext.Provider value={value}>
			{children}
		</SearchContext.Provider>
	);
};

export const useSearch = () => useContext(SearchContext);
