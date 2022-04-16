import React, { useState, useEffect } from 'react'
import BagProduct from '../../components/Bag/BagProduct'
import { Link } from 'react-router-dom';

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
  }

]

function Bag() {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    let total = 0;
    products.forEach(product => {
      total += product.price * product.qty;
    });
    setTotal(total);
  }, [products]);

  const deleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
    console.log(products);
  }

  const changeProductAmount = (productId: number, amount: number) => {
    const newProducts = products.map(product => {
      if (product.id === productId) {
        product.qty += amount;
      }
      return product;
    });
    setProducts(newProducts);
    console.log(products)
  }

  return (
    <div className='bag-main'>
      <div className='bag-title'>
        <h1>Review your bag.</h1>
      </div>
      {products.map((product) => (
        <BagProduct key={product.id} product={product} changeProductAmount={changeProductAmount} deleteProduct={deleteProduct}/>
      ))}
      <div className="bag-total">
        <table>
          <tbody>
            <tr>
              <td className="description">Subtotal</td>
              <td className='value'>${total}.00</td>
            </tr>
            <tr>
              <td className="description">Shipping</td>
              <td className='value'>FREE</td>
            </tr>
            <tr>
              <td className="description">Tax (19%)</td>
              <td className='value'>${Math.round(total * .19 * 100) / 100}</td>
            </tr>
          </tbody>
        </table>
        <h1 className='total'>Total: ${Math.round(total * 1.19 * 100) / 100}</h1>
      </div>

      <Link to='/checkout' className='checkout-button'>Check Out</Link>
    </div>
  )
}

export default Bag