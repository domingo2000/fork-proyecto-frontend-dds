import React from 'react'

function ImageSelector({setSelectedImageURL}: {setSelectedImageURL: React.Dispatch<React.SetStateAction<string>>}) {
  const data = {
    images: [
      {
        id: 0,
        url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000'
      },
      {
        id: 1,
        url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV5?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1633733312000'
      },
    ]
  };

  return (
    <div className='image-selector'>
      {data.images.map(image => (
        <img src={image.url} alt='product' key={image.id} onClick={() => setSelectedImageURL(image.url)} />
      ))}
    </div>
  )
}

export default ImageSelector