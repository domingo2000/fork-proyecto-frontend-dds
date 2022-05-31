import React, {useState} from 'react';
import APIRequester from '../../../services/APIRequester';
import {ICreateCategory} from '../../../interfaces/ICategory';

const initialState = {
  name: '',
};

function CreateCategory() {
  const [reqStatus, setReqStatus] = useState('');
  const [state, setState] = useState<ICreateCategory>(initialState);

  const handleChange = (attribute:string, e:React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [attribute]: e.target.value,
    });
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    APIRequester.createCategory(state)
      .then(() => setReqStatus('Category created successfully'))
      .catch((err) => setReqStatus(err.message));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col w-[30%] border-2 border-black p-3 m-4'>
      <h1 className='text-2xl font-bold'> Create a Category </h1>
      <h3>{reqStatus}</h3>
      <input placeholder='Name' className='border-2 rounded-md ml-4 px-2 py-1 my-1' value={state.name}
        onChange={(e) => handleChange('name', e)}/>

      <input type="submit" value="Create" className='border-2 rounded-md ml-4 px-2 py-1 my-1'/>
    </form>
  );
}

export default CreateCategory;
