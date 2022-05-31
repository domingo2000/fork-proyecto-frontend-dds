import React, {useEffect, useState} from 'react';
import APIRequester from '../../services/APIRequester';
import {IOrder} from '../../interfaces/IOrder';
import {ICoupon} from '../../interfaces/ICoupon';
import {IUser} from '../../interfaces/IUser';
import {IProduct} from '../../interfaces/IProduct';
import {ICategory} from '../../interfaces/ICategory';
import {Link} from 'react-router-dom';
import CreateCoupon from './Create/CreateCoupon';
import CreateCategory from './Create/CreateCategory';
import CreateProduct from './Create/CreateProduct';

interface IItem extends IOrder, ICoupon, IUser, IProduct, ICategory {};

function AdminResourceIndex({resource}: {resource: string}) {
  const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => {
    APIRequester.get(`${resource}`)
      .then((res) => setItems(res.data))
      .then(() => console.log(resource, items))
      .catch((err) => console.log(err));
  }, [resource]);

  const filterItems = (key: any, value: any) => {
    return typeof(value) !== 'object' && key !== 'created_at' && key !== 'updated_at';
  };

  const deleteResource = (id: number) => {
    APIRequester.delete(`${resource}/${id}`)
      .then(() => setItems(items.filter((item) => item.id !== id)))
      .catch((err) => console.log(err));
  };

  return (
    <div className='min-h-[70vh] border-4'>
      {resource === 'coupons' && <CreateCoupon />}
      {resource === 'categories' && <CreateCategory/>}
      {resource === 'products' && <CreateProduct/>}

      {!items[0] && <h1 className='text-2xl font-bold my-6'>There aren&apos;t any {resource} created</h1>}
      <table className="table-auto">
        <thead>
          <tr>
            {items[0] && Object.entries(items[0]).filter(([key, value]) => filterItems(key, value)).map(([key]) => (
              <th key={key} className="px-4 py-2">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            items && items.map((item) => (
              <tr key={item.id}>
                {Object.entries(item).filter(([key, value]) => filterItems(key, value))
                  .map(([key, value], i) => (
                    <td key={i} className="border px-4 py-2">{value as String}</td>
                  ))}
                <td className="border px-4 py-2">
                  <Link to={`/admin/${resource}/${item.id}`}>Show</Link>
                </td>
                {
                  resource !== 'users' &&
                  <td className="border px-4 py-2">
                    <Link to={`/admin/${resource}/${item.id}/edit`}>Edit</Link>
                  </td>
                }
                <td className="border px-4 py-2 bg-red-600 text-white">
                  <button onClick={() => deleteResource(item.id)} >Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default AdminResourceIndex;
