import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import APIRequester from '../../services/APIRequester';
import {IOrder} from '../../interfaces/IOrder';
import {ICoupon} from '../../interfaces/ICoupon';
import {IUser} from '../../interfaces/IUser';
import {IProduct} from '../../interfaces/IProduct';
import {ICategory} from '../../interfaces/ICategory';

interface IItem extends IOrder, ICoupon, IUser, IProduct, ICategory {};


function AdminResourceShow() {
  const {resource, id} = useParams();
  const [item, setItem] = useState<IItem[]>();

  useEffect(() => {
    APIRequester.get(`/${resource}/${id}`)
      .then((res) => setItem(res.data));
  }, [resource, id]);


  const filterItems = (key: any, value: any) => {
    return typeof(value) !== 'object';
  };

  return (
    <div className='min-h-[70vh] border-4 px-2 py-4'>
      {!item && <h1>There isn&apos;t any {resource} with id {id}</h1>}
      {item && <table className='flex'>
        <thead>
          <tr className='flex flex-col'>
            {Object.entries(item).filter(([key, value]) => filterItems(key, value)).map(([key]) => (
              <th key={key} className='flex justify-start pr-4'>{key}: </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className='flex flex-col'>
            {Object.entries(item).filter(([key, value]) => filterItems(key, value)).map(([key, value]) => (
              <td key={key}>{value}</td>
            ))}
          </tr>
        </tbody>
      </table>}
    </div>
  );
}

export default AdminResourceShow;
