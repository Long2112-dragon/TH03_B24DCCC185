// src/types/Product.ts

export type ProductCategory = 
  'Thiết Bị Điện Tử' | 'Thời Trang' | 'Ẩm thực' | 'Sách' | 'Khác'; 

export interface Product {
  id: number;
  ten: string;
  danhMuc: ProductCategory;
  gia: number;
  soLuong: number;
  moTa: string;
}

export const initialProducts: Product[] = [
  { id: 1, ten: 'Samsung S25 Ultra', danhMuc: 'Thiết Bị Điện Tử', gia: 25000000, soLuong: 10, moTa: 'Điện thoại flagship của Samsung' },
  { id: 2, ten: 'Áo Hoddie Capybara', danhMuc: 'Thời Trang', gia: 250000, soLuong: 50, moTa: 'Áo hoddie dày dặn ấm áp' },
  { id: 3, ten: '10 Vạn Câu Hỏi Vì Sao', danhMuc: 'Sách', gia: 120000, soLuong: 30, moTa: 'Sách Bổ Trợ Kiến Thức Cho Bé' },
  { id: 4, ten: 'Nậm Pịa', danhMuc: 'Ẩm thực', gia: 200000, soLuong: 100, moTa: 'Đặc sản Tây Bắc' },
  { id: 5, ten: 'Laptop Samsung Galaxy Book 4 Pro', danhMuc: 'Thiết Bị Điện Tử', gia: 35000000, soLuong: 8, moTa: 'Máy tính xách tay cao cấp' },
  { id: 6, ten: 'Quần Jeans Ống Rộng', danhMuc: 'Thời Trang', gia: 450000, soLuong: 40, moTa: 'Quần jeans rộng rãi và thoải mái' },
  { id: 7, ten: 'Dụng cụ sửa chữa', danhMuc: 'Khác', gia: 800000, soLuong: 15, moTa: 'Bộ dụng cụ đa năng' },
  { id: 8, ten: 'Sữa tươi Vinamilk', danhMuc: 'Ẩm thực', gia: 30000, soLuong: 60, moTa: 'Sữa tươi tiệt trùng 1L' },
  { id: 9, ten: 'Tuyển tập những bài CODE hay', danhMuc: 'Sách', gia: 350000, soLuong: 25, moTa: 'Hướng dẫn tự học React từ cơ bản' },
  { id: 10, ten: 'Tai Nghe Bluetooth', danhMuc: 'Thiết Bị Điện Tử', gia: 1500000, soLuong: 20, moTa: 'Tai nghe không dây chống ồn' },
];