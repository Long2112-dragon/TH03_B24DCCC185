// src/context/ProductReducer.ts
import { type Product } from '../types/Product'; 

export type ProductAction =
  | { type: 'ADD_PRODUCT'; payload: Omit<Product, 'id'> }
  | { type: 'UPDATE_PRODUCT'; payload: Product }
  | { type: 'DELETE_PRODUCT'; payload: { id: number } };

export const productReducer = (state: Product[], action: ProductAction): Product[] => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const newId = state.length > 0 ? Math.max(...state.map(p => p.id)) + 1 : 1;
      return [...state, { ...action.payload, id: newId }];

    case 'UPDATE_PRODUCT':
      return state.map(product =>
        product.id === action.payload.id ? action.payload : product
      );

    case 'DELETE_PRODUCT':
      if (window.confirm(`Bạn có chắc chắn muốn xóa sản phẩm ID: ${action.payload.id} không?`)) {
        return state.filter(product => product.id !== action.payload.id);
      }
      return state;

    default:
      return state;
  }
};