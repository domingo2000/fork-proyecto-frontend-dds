import React from 'react';
import {IImage} from '../../interfaces/IImage';

function ImageSelector({setSelectedImageURL, images}: {
  setSelectedImageURL: React.Dispatch<React.SetStateAction<string>>
  images: IImage[]
}) {
  return (
    <div className='image-selector flex'>
      {images.map((image) => (
        <img src={image.url} alt='product' key={image.id} onClick={() => setSelectedImageURL(image.url)} />
      ))}
    </div>
  );
}

export default ImageSelector;
