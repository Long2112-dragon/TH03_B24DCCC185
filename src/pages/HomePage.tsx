// src/pages/HomePage.tsx
import React, { useState, useMemo, useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import SearchFilter from '../components/SearchFilter';
import Pagination from '../components/Pagination';
import { type Product } from '../types/Product';

const PRODUCTS_PER_PAGE = 6;

const HomePage: React.FC = () => {
  const { products } = useProducts();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 1000000000 });
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    let result: Product[] = products;

    if (searchTerm) {
      result = result.filter(p => p.ten.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (filterCategory) {
      result = result.filter(p => p.danhMuc === filterCategory);
    }

    result = result.filter(p => p.gia >= priceRange.min && p.gia <= priceRange.max);

    return result;
  }, [products, searchTerm, filterCategory, priceRange]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterCategory, priceRange]);


  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <div>
      <h2>Trang chủ: Danh sách Sản phẩm</h2>
      
      <SearchFilter 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        setFilterCategory={setFilterCategory}
        setPriceRange={setPriceRange}
      />
      
      <p style={{ marginBottom: '20px' }}>
        <strong>Tổng số sản phẩm:</strong> {filteredProducts.length} | <strong>Trang hiện tại:</strong> {currentPage}/{totalPages}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {currentProducts.length > 0 ? (
            currentProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))
        ) : (
            <p>Không tìm thấy sản phẩm nào phù hợp.</p>
        )}
      </div>

      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        setCurrentPage={setCurrentPage} 
      />
    </div>
  );
};

export default HomePage;