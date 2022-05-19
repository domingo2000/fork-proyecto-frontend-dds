import React from 'react';
import {Link} from 'react-router-dom';
import {IProduct} from '../../interfaces/IProduct';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

interface IProps {
  product: IProduct;
}

function HomeProduct({product}: IProps) {
  return (
    <div className='flex flex-col items:center p-2 h-[560px] mb-2 bg-home-gray overflow-y-hidden'>
      <div className='text-center text-4xl font-bold p-2'>{product.name}</div>
      <div className='text-center text-2xl tracking-wider font-medium p-2'>{product.subtitle}</div>

      <div className='flex justify-center'>
        <Link to={`/products/${product.id}`} className='text-center text-xl text-blue-600 py-2 px-4 flex items-center hover:underline tracking-wide'>
          Learn More <FontAwesomeIcon className="p-1" icon={faAngleRight}/>
        </Link>
        <Link to={`/products/${product.id}/checkout`} className='text-center text-xl text-blue-600 py-2 px-4 flex items-center hover:underline tracking-wide'>
          Buy <FontAwesomeIcon className="p-1" icon={faAngleRight}/>
        </Link>
      </div>

      <img className='flex mt-4 self-center object-scale-down' src={product.images[0].url} alt={product.name} />
    </div>
  );
}

export default HomeProduct;
