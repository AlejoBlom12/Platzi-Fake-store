import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProductStore } from '../store/use.product.store'
import { IGetSingleProductRequest } from '../../../core/product/domain/get.single.product'
import '../css/product.page.css'
import ProductImageGallery from '../all/components/list/components/galleryImgs/GalleryImagesProduct'

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>()
  const { singleProduct, loadingProduct, getSingleProduct } = useProductStore()

  const navigate = useNavigate()

  const onBack = () => {
    navigate('/products')
  }

  useEffect(() => {
    if (productId) {
      const requestData: IGetSingleProductRequest = {
        id: parseInt(productId, 10)
      }
      getSingleProduct(requestData)
    }
  }, [getSingleProduct, productId])

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
                <h2 className='card-title'>{singleProduct.title}</h2>
                <div className='product-description mt-4'>
                  <strong>Descripción:</strong>
                  <div>{singleProduct.description}</div>
                </div>
                <div className='card-text mt-5'>
                  <strong>Categoría:</strong> {singleProduct.category.name}
                </div>
                <div className='card-text mt-3'>
                  {' '}
                  <strong>Precio:</strong> ${singleProduct.price}
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage
