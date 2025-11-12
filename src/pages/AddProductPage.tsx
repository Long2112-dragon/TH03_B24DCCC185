// src/pages/AddProductPage.tsx
import React from 'react';
import ProductForm from '../components/ProductForm';
import { useProducts } from '../context/ProductContext';
import { type Product } from '../types/Product';
import { useNavigate } from 'react-router-dom';

const AddProductPage: React.FC = () => {
  const { dispatch } = useProducts();
  const navigate = useNavigate();

  const handleAdd = (newProduct: Omit<Product, 'id'>) => {
    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
    alert('Thêm sản phẩm thành công!');
    navigate('/');
  };

  return (
    <div>
      <h2>Thêm Sản phẩm Mới</h2>
      <ProductForm onSubmit={handleAdd} />
    </div>
  );
};

export default AddProductPage;