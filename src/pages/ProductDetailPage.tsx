// src/pages/ProductDetailPage.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products, dispatch } = useProducts();
  const productId = Number(id);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return <h2>Sản phẩm không tồn tại!</h2>;
  }

  const handleDelete = () => {
    dispatch({ type: 'DELETE_PRODUCT', payload: { id: productId } });
    alert('Đã gửi yêu cầu xóa (nếu bạn xác nhận).');
    navigate('/');
  };

  return (
    <div>
      <h2>Chi tiết Sản phẩm: {product.ten}</h2>
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Danh mục:</strong> {product.danhMuc}</p>
      <p><strong>Giá:</strong> {product.gia.toLocaleString()} VND</p>
      <p><strong>Số lượng:</strong> {product.soLuong}</p>
      <p><strong>Mô tả:</strong> {product.moTa}</p>

      <button onClick={() => navigate(`/edit/${product.id}`)}>Chỉnh sửa</button>
      <button onClick={handleDelete} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>Xóa</button>
      <button onClick={() => navigate('/')} style={{ marginLeft: '10px' }}>Quay lại Trang chủ</button>
    </div>
  );
};

export default ProductDetailPage;