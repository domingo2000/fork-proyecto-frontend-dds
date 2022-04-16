import React from 'react'
import ImageSelector from './ImageSelector'
import { useRef, useState, useEffect } from 'react'

function ImageBanner() {
  const [selectedImageURL, setSelectedImageURL] = useState<string>('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV5?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1633733312000');
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
      <ImageSelector setSelectedImageURL={setSelectedImageURL} />
    </div>
  )
}

export default ImageBanner