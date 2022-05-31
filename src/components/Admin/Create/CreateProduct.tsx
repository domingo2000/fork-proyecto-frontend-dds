import React, {useState} from 'react';
import {ICreateProduct} from '../../../interfaces/IProduct';
import APIRequester from '../../../services/APIRequester';

const initialProduct = {
  name: '',
  subtitle: '',
  description: '',
  code: '',
  price: 0,
  brand: '',
  image_url: '',
};

function CreateProduct() {
  const [state, setState] = useState<ICreateProduct>(initialProduct);
  const [reqStatus, setReqStatus] = useState('');

  const handleChange = (attribute:string, e:React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [attribute]: e.target.value,
    });
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    APIRequester.createProduct(state)
      .then(() => setReqStatus('Product created successfully'))
      .catch((err) => setReqStatus(err.message));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col w-[30%] border-2 border-black p-3 m-4'>
      <h1 className='text-2xl font-bold'> Create a Product </h1>
      <h3>{reqStatus}</h3>
      <input placeholder='Name' className='border-2 rounded-md ml-4 px-2 py-1 my-1' value={state.name}
        onChange={(e) => handleChange('name', e)}/>
      <input placeholder='Subtitle' className='border-2 rounded-md ml-4 px-2 py-1 my-1' value={state.subtitle}
        onChange={(e) => handleChange('subtitle', e)}/>
      <input placeholder='Description' className='border-2 rounded-md ml-4 px-2 py-1 my-1' value={state.description}
        onChange={(e) => handleChange('description', e)}/>
      <input placeholder='Code' className='border-2 rounded-md ml-4 px-2 py-1 my-1' value={state.code}
        onChange={(e) => handleChange('code', e)}/>
      <div className='flex items-center ml-4'>
        Price:
        <input type="number" step="0.01" placeholder='Price' className='border-2 rounded-md ml-4 px-2 py-1 my-1'
          value={state.price} onChange={(e) => handleChange('price', e)}/>
      </div>
      <input placeholder='Brand' className='border-2 rounded-md ml-4 px-2 py-1 my-1' value={state.brand}
        onChange={(e) => handleChange('brand', e)}/>
      <input placeholder='Main Image URL' className='border-2 rounded-md ml-4 px-2 py-1 my-1' value={state.image_url}
        onChange={(e) => handleChange('image_url', e)}/>

      <input type="submit" value="Create" className='border-2 rounded-md ml-4 px-2 py-1 my-1'/>
    </form>
  );
}

export default CreateProduct;
