import React from 'react'
import { Image as IImage } from '../../interfaces/image';

function ImageSelector({setSelectedImageURL, images}: {
  setSelectedImageURL: React.Dispatch<React.SetStateAction<string>>
  images: IImage[]
}) {

  return (
    <div className='image-selector'>
      {images.map(image => (
        <img src={image.url} alt='product' key={image.id} onClick={() => setSelectedImageURL(image.url)} />
      ))}
    </div>
  )
}

export default ImageSelector