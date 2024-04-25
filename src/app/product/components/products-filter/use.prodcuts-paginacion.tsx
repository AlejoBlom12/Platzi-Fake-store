
import { useProductsFilterForm } from './hooks';

const PaginationProducts = () => {
  const { methods, totalProducts } = useProductsFilterForm();
  const { limit, offset } = methods.getValues();

  const setPage = (newOffset: number) => {
    methods.setValue('offset', String(newOffset));
  };

  const totalPages = Math.ceil(totalProducts / (parseInt(limit || '10') || 10));

  const paginationLinks = [];
  for (let i = 1; i <= totalPages; i++) {

    const calculatedOffset = (i - 1) * (parseInt(limit || '10') || 10);
    const isCurrent = Number(offset) === calculatedOffset;
    
    paginationLinks.push(
      <li key={i}>
        <a
          href={`?limit=${limit}&offset=${calculatedOffset}`} 
          className={`pagination-link ${isCurrent ? 'is-current' : ''}`}
          aria-label={`Goto page ${i}`}
          onClick={() => setPage(calculatedOffset)}
        >
          {i}
        </a>
      </li>
    );
  }

  return (
    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
      <a href={`?limit=${limit}&offset=${Number(offset) - 10}`} className="pagination-previous">Previous</a>
      <a href={`?limit=${limit}&offset=${Number(offset) + 10}`} className="pagination-next">Next page</a>
      <ul className="pagination-list">
        {paginationLinks}
      </ul>
    </nav>
  );
};

export default PaginationProducts;
