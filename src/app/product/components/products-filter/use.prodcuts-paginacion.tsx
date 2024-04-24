import React from 'react';

interface PaginationProps {
  totalProducts: number;
  productsPerPage: number;
}

const PaginationProducts: React.FC<PaginationProps> = ({ totalProducts, productsPerPage }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const paginationLinks = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationLinks.push(
      <li key={i}>
        <a
          href='#'
          className='pagination-link'
          aria-label={`Goto page ${i}`}
        >
          {i}
        </a>
      </li>
    );
  }

  return (
    <nav
      className='pagination is-centered'
      role='navigation'
      aria-label='pagination'
    >
      <ul className='pagination-list'>
        {paginationLinks}
      </ul>
    </nav>
  );
};

export default PaginationProducts;
