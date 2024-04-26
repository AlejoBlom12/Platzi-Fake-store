import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProductStore } from '../store/use.product.store'
import { IGetSingleProductRequest } from '../../../core/product/domain/get.single.product'
import ProductImageGallery from '../all/components/list/components/galleryImgs/GalleryImagesProduct'
import '../css/gallery.images.product.css'
import '../css/product.page.css'
import Modal from '../all/components/edit/modal/modal.update.products'
import UpdateProductForm from '../all/components/edit/ProductUpdateForm'

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>()
  const { singleProduct, loadingProduct, getSingleProduct } = useProductStore()
  const [isModalOpen, setIsModalOpen] = useState(false);


  const navigate = useNavigate()

  const onBack = () => {
    navigate("/products");
  };

  useEffect(() => {
    if (productId) {
      const requestData: IGetSingleProductRequest = {
        id: parseInt(productId, 10),
      };
      getSingleProduct(requestData);
    }
  }, [getSingleProduct, productId]);

  if (loadingProduct) {
    return <div className='container'>Cargando...</div>
  }

  if (!singleProduct) {
    return <div className='container'>No se pudo cargar el producto.</div>
  }

  const productImages = singleProduct.images.map((image, index) => ({
    id: index,
    url: image
  }))

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='product-container'>
        <div className='card mt-5 product-card'>
          <div className='row product-row'>
            <div className='col-md-6'>
              <ProductImageGallery images={productImages} />
            </div>
            <div className='col-md-6'>
              <div className='card-body'>
                <h2
                  className='card-title'
                  style={{ fontWeight: 'bold', fontSize: '40px' }}
                >
                  {singleProduct.title}
                </h2>
                <div
                  className='product-description mt-4 mb-4'
                  style={{ color: 'black' }}
                >
                  <div
                    className='description text-center'
                    style={{ color: 'black' }}
                  >
                    Descripción:
                  </div>
                  <div>{singleProduct.description}</div>
                </div>
                <div
                  className='card-text mt-5 '
                  style={{ color: 'black' }}
                >
                  <strong
                    style={{
                      color: 'black',
                      fontSize: '15px',
                      fontWeight: 'bold'
                    }}
                  >
                    Categoría:
                  </strong>{' '}
                  {singleProduct.category.name}
                </div>
                <div
                  className='card-text mt-3'
                  style={{ color: 'black' }}
                >
                  {' '}
                  <strong
                    style={{
                      color: 'black',
                      fontSize: '15px',
                      fontWeight: 'bold'
                    }}
                  >
                    Precio:
                  </strong>{' '}
                  ${singleProduct.price}
                </div>
              </div>
            </div>
            <div className='row d-flex'>
              <div className='col-md-1 mt-3'>
                <button
                  className='btn btn-primary'
                  onClick={onBack}
                >
                  Regresar
                </button>
              </div>
              <div className='col-md-1 mt-3'>
                {productId && (
                  <button
                    className='btn btn-secondary'
                    onClick={() => setIsModalOpen(true)}
                  >
                    Editar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {productId && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          id={productId}
          closeModal={closeModal}
        >
          <UpdateProductForm
            id={productId}
            closeModal={closeModal}
            currentProductData={singleProduct}
          />
        </Modal>
      )}
    </>
  )
}

export default ProductPage
