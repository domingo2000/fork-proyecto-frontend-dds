import React, {useState} from 'react';
import {ICreateCoupon} from '../../../interfaces/ICoupon';
import APIRequester from '../../../services/APIRequester';

const initialState: ICreateCoupon = {
  code: '',
  discount: 0,
  redeemed: false,
  active: false,
  expiry_date: '',
  category_id: -1,
};

function CreateCoupon() {
  const [state, setState] = useState<ICreateCoupon>(initialState);
  const [reqStatus, setReqStatus] = useState('');

  const handleChange = (attribute:string, e:React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [attribute]: e.target.value,
    });
  };

  const handleCheckboxChange = (attribute:string, e:React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [attribute]: e.target.checked,
    });
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    APIRequester.createCoupon(state)
      .then(() => setReqStatus('Coupon created successfully'))
      .catch((err) => setReqStatus(err.message));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col w-[30%] border-2 border-black p-3 m-4'>
      <h1 className='text-2xl font-bold'> Create a Coupon </h1>
      <h3>{reqStatus}</h3>
      <input placeholder='Code' className='border-2 rounded-md ml-4 px-2 py-1 my-1' value={state.code}
        onChange={(e) => handleChange('code', e)}/>
      <div className='flex ml-4'>
        Active <input type='checkbox' className='border-2 rounded-md ml-4 px-2 py-1 my-1'
          onChange={(e) => handleCheckboxChange('active', e)}/>
      </div>
      <div className="flex ml-4">
        Redemed <input type='checkbox' className='border-2 rounded-md ml-4 px-2 py-1 my-1'
          onChange={(e) => handleCheckboxChange('redeemed', e)}/>
      </div>
      <input type="number" step="0.01" placeholder='Discount (%) Ex: 0.3'
        className='border-2 rounded-md ml-4 px-2 py-1 my-1'
        value={state.discount} onChange={(e) => handleChange('discount', e)}/>
      <div className='ml-4'>
        Expiration Date:
        <input type='date' className='border-2 rounded-md ml-4 px-2 py-1 my-1'
          onChange={(e) => handleChange('expiry_date', e)}/>
      </div>
      <div className="flex">
        Category ID:
        <input type='number' placeholder='Category id' className='border-2 rounded-md ml-4 px-2 py-1 my-1'
          value={state.category_id} onChange={(e) => handleChange('category_id', e)} />
      </div>

      <input type='submit' value='Submit' className='bg-blue-400 rounded-md text-white p-1' />
    </form>
  );
}

export default CreateCoupon;
