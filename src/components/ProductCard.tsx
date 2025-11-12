// src/components/ProductCard.tsx
import React from 'react';
import { type Product } from '../types/Product';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { ten, danhMuc, gia, soLuong, id } = product;

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
      <h3>{ten}</h3>
      <p>Danh mục: <strong>{danhMuc}</strong></p>
      <p>Giá: <strong>{gia.toLocaleString()}</strong> VND</p>
      <p>Số lượng: {soLuong}</p>
      <button onClick={() => navigate(`/products/${id}`)}>Xem chi tiết</button>
      <button onClick={() => navigate(`/edit/${id}`)} style={{ marginLeft: '10px' }}>Sửa</button>
    </div>
  );
};

export default ProductCard;