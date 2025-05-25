import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ProductProvider } from './context/ProductContext.tsx';
import { SearchProvider } from './context/SearchContext.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<SearchProvider>
			<ProductProvider>
				<App />
			</ProductProvider>
		</SearchProvider>
	</StrictMode>
);
