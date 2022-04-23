import React from 'react';
import ImageSelector from './ImageSelector';
import { useRef, useState, useEffect } from 'react';
import { Product as IProduct } from '../../interfaces/product';


function ImageBanner({product}: {product: IProduct}) {
  const [selectedImageURL, setSelectedImageURL] = useState<string>(product.images[0].url);
  const mainImageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    if (mainImageRef.current) {
      mainImageRef.current.src = selectedImageURL;
    }
  }, [selectedImageURL]);

  return (
    <div className='image-banner-main'>
      <img src=""
          alt="main product" className='main-image' ref={mainImageRef}/>
      <ImageSelector setSelectedImageURL={setSelectedImageURL} images={product.images}/>
    </div>
  )
}

export default ImageBanner