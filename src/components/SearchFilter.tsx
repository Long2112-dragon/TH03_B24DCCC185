// src/components/SearchFilter.tsx
import React, { useState } from 'react';
import { type ProductCategory } from '../types/Product';

const categories: ProductCategory[] = ['Thiết Bị Điện Tử', 'Thời Trang', 'Ẩm thực', 'Sách', 'Khác'];

interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setFilterCategory: (cat: string) => void;
  setPriceRange: (range: { min: number; max: number }) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ searchTerm, setSearchTerm, setFilterCategory, setPriceRange }) => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000000000); 

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePriceFilter = (e: React.FormEvent) => {
    e.preventDefault();
    setPriceRange({ min: minPrice, max: maxPrice === 0 ? 1000000000 : maxPrice });
  };

  return (
    <div style={{ marginBottom: '30px', padding: '15px', border: '1px dashed #ccc' }}>
      <div style={{ marginBottom: '15px' }}>
        <input 
          type="text" 
          placeholder="Tìm kiếm theo tên sản phẩm..." 
          value={searchTerm} 
          onChange={handleSearchChange}
          style={{ padding: '8px', width: '300px' }}
        />
      </div>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div>
          <label style={{ marginRight: '10px' }}>Danh mục:</label>
          <select onChange={(e) => setFilterCategory(e.target.value)} style={{ padding: '8px' }}>
            <option value="">Tất cả</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <form onSubmit={handlePriceFilter}>
          <label style={{ marginRight: '10px' }}>Khoảng giá (VND):</label>
          <input 
            type="number" 
            placeholder="Giá Min" 
            value={minPrice} 
            onChange={(e) => setMinPrice(Number(e.target.value))}
            style={{ width: '100px', padding: '8px' }}
          />
          <span style={{ margin: '0 10px' }}>-</span>
          <input 
            type="number" 
            placeholder="Giá Max" 
            value={maxPrice} 
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            style={{ width: '100px', padding: '8px' }}
          />
          <button type="submit" style={{ marginLeft: '10px', padding: '8px' }}>Lọc giá</button>
        </form>
      </div>
    </div>
  );
};

export default SearchFilter;