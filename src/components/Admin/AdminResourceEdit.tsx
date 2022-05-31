import React, {useEffect, useState} from 'react';
import APIRequester from '../../services/APIRequester';
import {useParams} from 'react-router-dom';

function AdminResourceEdit() {
  const {resource, id} = useParams();
  const [item, setItem] = useState<any>();
  const [reqStatus, setReqStatus] = useState('');

  const filterItems = (key: any, value: any) => {
    return typeof(value) !== 'object' && key !== 'created_at' && key !== 'updated_at' && key!= 'id';
  };

  useEffect(() => {
    APIRequester.get(`/${resource}/${id}`)
      .then((res) => setItem(res.data));
  }, [resource, id]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    APIRequester.put(`/${resource}/${id}`, item)
      .then((res) => setReqStatus('Resource updated successfully'))
      .catch((err) => setReqStatus(err));
  };

  const handleChange = (attribute:string, e:React.ChangeEvent<HTMLInputElement>) => {
    setItem({
      ...item,
      [attribute]: e.target.value,
    });
  };


  return (
    <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col w-[30%] border-2 border-black p-3 m-4'>
      <h1 className='text-2xl font-bold'> Update {resource} #{id} </h1>
      <h3>{reqStatus}</h3>
      {!item && <h1>There isn&apos;t any {resource} with id {id}</h1>}

      {item && Object.entries(item).filter(([key, value]) => filterItems(key, value)).map(([key, value]) => (
        <div key={key} className='my-1'>
          <label className='text-gray-700'>{key}: </label>
          <input className='border-2 border-gray-500 p-2 rounded-md' type='text' value={value as string}
            onChange={(e) => handleChange(key, e)} />
        </div>
      ))}

      <input type='submit' value='Update' className='border-2 border-gray-500 p-2 rounded-md'/>
    </form>
  );
}

export default AdminResourceEdit;
