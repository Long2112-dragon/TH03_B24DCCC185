// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';

const Header = () => (
  <header style={{ padding: '20px', backgroundColor: '#f4f4f4', marginBottom: '20px' }}>
    <nav>
      <Link to="/" style={{ marginRight: '15px' }}>Trang chủ</Link>
      <Link to="/add">Thêm sản phẩm</Link>
    </nav>
  </header>
);

const App: React.FC = () => {
  return (
    <Router>
      <ProductProvider>
        <Header />
        <main style={{ padding: '0 20px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/add" element={<AddProductPage />} />
            <Route path="/edit/:id" element={<EditProductPage />} />
          </Routes>
        </main>
      </ProductProvider>
    </Router>
  );
};

export default App;