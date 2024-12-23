import React from 'react';
import '../styles/Pagination.css';

const Pagination = ({ currentPage, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <ul className="pagination">
      <li className={`prev ${currentPage === 1 ? 'disabled' : ''}`}>
        <a href="#">&laquo;</a>
      </li>
      {pages.slice(0, 5).map((page) => (
        <li key={page} className={page === currentPage ? 'active' : ''}>
          <a href="#">{page}</a>
        </li>
      ))}
      <li className="dots">...</li>
      <li className="next">
        <a href="#">&raquo;</a>
      </li>
    </ul>
  );
};

export default Pagination;
