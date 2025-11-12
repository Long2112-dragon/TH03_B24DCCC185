// src/components/ProductForm.tsx
import React, { useState, useEffect } from 'react';
import { type Product, type ProductCategory } from '../types/Product';

interface ProductFormProps {
  onSubmit: (data: Omit<Product, 'id'>) => void;
  initialData?: Product;
}

const categories: ProductCategory[] = ['Thiết Bị Điện Tử', 'Thời Trang', 'Ẩm thực', 'Sách', 'Khác'];

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    ten: '',
    danhMuc: '' as ProductCategory,
    gia: 0,
    soLuong: 0,
    moTa: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        ten: '',
        danhMuc: '' as ProductCategory,
        gia: 0,
        soLuong: 0,
        moTa: '',
      });
    }
  }, [initialData]);

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.ten || formData.ten.length < 3) {
      newErrors.ten = 'Tên sản phẩm bắt buộc và phải có ít nhất 3 ký tự.';
    }

    if (!formData.danhMuc) {
      newErrors.danhMuc = 'Vui lòng chọn danh mục.';
    }

    if (!formData.gia || formData.gia <= 0) {
      newErrors.gia = 'Giá bắt buộc phải là số dương.';
    }

    if (!formData.soLuong || formData.soLuong <= 0 || !Number.isInteger(formData.soLuong)) {
      newErrors.soLuong = 'Số lượng bắt buộc phải là số nguyên dương.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'gia' || name === 'soLuong' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label>Tên sản phẩm:</label>
        <input type="text" name="ten" value={formData.ten} onChange={handleChange} style={{ width: '100%', padding: '5px' }} />
        {errors.ten && <p style={{ color: 'red', fontSize: '12px', margin: '0' }}>{errors.ten}</p>}
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label>Danh mục:</label>
        <select name="danhMuc" value={formData.danhMuc} onChange={handleChange} style={{ width: '100%', padding: '5px' }}>
          <option value="">-- Chọn danh mục --</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        {errors.danhMuc && <p style={{ color: 'red', fontSize: '12px', margin: '0' }}>{errors.danhMuc}</p>}
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label>Giá:</label>
        <input type="number" name="gia" value={formData.gia} onChange={handleChange} style={{ width: '100%', padding: '5px' }} />
        {errors.gia && <p style={{ color: 'red', fontSize: '12px', margin: '0' }}>{errors.gia}</p>}
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label>Số lượng:</label>
        <input type="number" name="soLuong" value={formData.soLuong} onChange={handleChange} style={{ width: '100%', padding: '5px' }} />
        {errors.soLuong && <p style={{ color: 'red', fontSize: '12px', margin: '0' }}>{errors.soLuong}</p>}
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Mô tả:</label>
        <textarea name="moTa" value={formData.moTa} onChange={handleChange} style={{ width: '100%', padding: '5px' }} />
      </div>
      
      <button type="submit" style={{ padding: '10px 15px' }}>{initialData ? 'Cập nhật' : 'Thêm mới'}</button>
    </form>
  );
};

export default ProductForm;