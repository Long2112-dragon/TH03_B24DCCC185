// src/context/ProductContext.tsx
import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { type Product, initialProducts } from '../types/Product';
import { productReducer, type ProductAction } from './ProductReducer';

interface ProductContextState {
  products: Product[];
  dispatch: React.Dispatch<ProductAction>;
}

export const ProductContext = createContext<ProductContextState | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, initialProducts);

  const contextValue: ProductContextState = {
    products,
    dispatch,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};