import React from 'react';
import ReceiptProduct from '../../components/Checkout/ReceiptProduct';

const initialProducts = [
  {
    id: 0,
    title: 'Airpods (3rd generation)',
    price: 179.00,
    qty: 1,
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000',
  },
  {
    id: 1,
    title: '10.9-inch iPad Air Wi-Fi 64GB - Space Gray',
    price: 599.00,
    qty: 1,
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-spacegray-202203?wid=470&hei=556&fmt=png-alpha&.v=1645066742664',
  },
  {
    id: 2,
    title: 'iPhone 13 Pro 128GB Alpine Green',
    price: 999.00,
    qty: 1,
    img: 'https://www.apple.com/v/iphone/home/bf/images/overview/compare/compare_iphone_13_pro__bpn3x8hs692a_large.jpg',
  },

];

function CheckoutCompleted() {
  const subtotal = initialProducts.reduce((prev, curr) => prev + curr.price, 0);

  return (
    <div className='checkout-completed-main'>
      <h1 className='title'>Your order was created successfully.</h1>

      <div className='receipt'>
        <div className='receipt-title'>
          <h1>Receipt</h1>
        </div>
        <div className='receipt-info'>
          <div className='buyer-info'>
            <div className='item'>
              <h3 className='key'>Name</h3>
              <h3 className='value'>José Miguel Quintana</h3>
            </div>
            <div className='item'>
              <h3 className='key'>Address</h3>
              <h3 className='value'>San Joaquín 123, Macul, Chile</h3>
            </div>
          </div>
          <div className='order-info'>
            <div className='item'>
              <h3 className='key'>Date</h3>
              <h3 className='value'>12/12/2020</h3>
            </div>
            <div className='item'>
              <h3 className='key'>Document N°</h3>
              <h3 className='value'>457115681235</h3>
            </div>
          </div>

        </div>
        <div className='receipt-products'>
          {initialProducts.map((product) => (
            <ReceiptProduct product={product} key={product.id} />
          ))}

        </div>

        <table className='receipt-total'>
          <tbody>
            <tr>
              <td className='key'>
                <h3>Subtotal</h3>
              </td>
              <td className='value'>
                <h3>{subtotal}.00</h3>
              </td>
            </tr>
            <tr>
              <td className='key'>
                <h3>Taxes</h3>
              </td>
              <td className='value'>
                <h3>{Math.round(subtotal * 0.19 * 100) / 100}</h3>
              </td>
            </tr>
            <tr>
              <td className='key'>
                <h3>Total</h3>
              </td>
              <td className='value'>
                <h3>${Math.round(subtotal * 1.19 * 100) / 100}</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  );
}

export default CheckoutCompleted;
