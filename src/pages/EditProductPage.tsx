// src/pages/EditProductPage.tsx
import React from 'react';
import ProductForm from '../components/ProductForm';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { type Product } from '../types/Product';

const EditProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products, dispatch } = useProducts();
  const productId = Number(id);

  const productToEdit = products.find(p => p.id === productId);

  if (!productToEdit) {
    return <h2>Sản phẩm không tồn tại để chỉnh sửa!</h2>;
  }

  const handleUpdate = (updatedData: Omit<Product, 'id'>) => {
    const updatedProduct: Product = { ...updatedData, id: productId };
    dispatch({ type: 'UPDATE_PRODUCT', payload: updatedProduct });
    alert('Cập nhật sản phẩm thành công!');
    navigate(`/products/${productId}`);
  };

  return (
    <div>
      <h2>Chỉnh sửa Sản phẩm: {productToEdit.ten}</h2>
      <ProductForm 
        onSubmit={handleUpdate} 
        initialData={productToEdit} 
      />
    </div>
  );
};

export default EditProductPage;