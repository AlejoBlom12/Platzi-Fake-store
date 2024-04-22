import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { useProductsStore } from "../store/use.product.store";
import ProductForm from "../components/FormCreateProduct/ProductForm";
import "../css/product.list.css";

const ProductListPage = () => {
  const { loadingPaginatedProducts, paginatedProducts, getPaginatedProducts } =
    useProductsStore();
  const [showForm, setShowForm] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  useEffect(() => {
    getPaginatedProducts(offset, limit);
  }, [getPaginatedProducts, offset, limit]);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const loadNextPage = () => {
    setOffset(offset + limit);
  };

  const loadPreviousPage = () => {
    if (offset >= limit) {
      setOffset(offset - limit);
    }
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <h1>Products</h1>
        <div className="">
          <button
            className="btn btn-outline-success btn-light"
            onClick={handleToggleForm}
          >
            Create Product
          </button>
        </div>
        <hr />

        {showForm && <ProductForm />}

        {loadingPaginatedProducts ? (
          <div>Loading...</div>
        ) : (
          <>
            <ProductList products={paginatedProducts || []} />
            <div className="pagination-container mt-4 d-flex justify-content-between">
              <button
                className="btn btn-secondary btn-lg"
                onClick={loadPreviousPage}
              >
                Previous
              </button>
              <button
                className="btn btn-secondary btn-lg"
                onClick={loadNextPage}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductListPage;
