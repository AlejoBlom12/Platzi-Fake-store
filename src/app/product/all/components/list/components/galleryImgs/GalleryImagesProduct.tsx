import { useState } from 'react'
import defaultImage from '../../../../../../../assets/imagen-no-found.jpg' 
import '../../../../../css/gallery.images.product.css'

interface ProductImage {
  id: number
  url: string
}

const ProductImageGallery = ({ images }: { images: ProductImage[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = defaultImage 
  }

  return (
    <div className='gallery-container'>
      <img
        key={images[currentIndex].id}
        src={images[currentIndex].url}
        alt={`Imagen ${currentIndex}`}
        className='image'
        onError={handleImageError} 
      />
      <button
        className='gallery-btn prev'
        onClick={prevImage}
      >
        {'<'}
      </button>
      <button
        className='gallery-btn next'
        onClick={nextImage}
      >
        {'>'}
      </button>
    </div>
  )
}

export default ProductImageGallery
