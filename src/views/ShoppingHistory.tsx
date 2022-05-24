import React, {useState, useEffect} from 'react';
import HistoryOrder from '../components/History/HistoryOrder';
import useFetchData from '../services/useFetchData';
import {IOrder} from '../interfaces/IOrder';


function ShoppingHistory() {
  const [history, setHistory] = useState<IOrder[]>([]);

  const {
    response,
    loading,
  } = useFetchData('/users/1'); // TODO call /users/1/history in API

  useEffect(() => {
    if (response) {
      setHistory(response.data.orders);
      console.log(response.data.orders);
    }
  }, [response]);

  return (
    <div className='px-64 bg-home-gray py-4 min-h-[80vh]'>
      <h1 className='text-3xl font-bold my-6'>Orders</h1>
      {loading && <p>Loading...</p>}
      {history && (
        <ul>
          {history.map((order: IOrder) => (
            <HistoryOrder
              key={order.id}
              order={order}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingHistory;
