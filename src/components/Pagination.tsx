// src/components/Pagination.tsx
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => {
  if (totalPages <= 1) return null;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <button 
        onClick={() => handlePageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        style={{ marginRight: '10px' }}
      >
        Previous
      </button>

      {pageNumbers.map(number => (
        <button 
          key={number}
          onClick={() => handlePageChange(number)}
          style={{ 
            margin: '0 5px', 
            fontWeight: number === currentPage ? 'bold' : 'normal',
            backgroundColor: number === currentPage ? '#ccc' : 'white'
          }}
        >
          {number}
        </button>
      ))}

      <button 
        onClick={() => handlePageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
        style={{ marginLeft: '10px' }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;