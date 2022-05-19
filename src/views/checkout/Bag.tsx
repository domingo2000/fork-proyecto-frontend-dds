import React, {useState, useEffect} from 'react';
import BagProduct from '../../components/Bag/BagProduct';
import {Link} from 'react-router-dom';
import {ICart} from '../../interfaces/ICart';
import {emptyCart} from '../../utils/emptyCart';

function Bag() {
  if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', JSON.stringify(emptyCart));
  }
  const initialCart = JSON.parse(localStorage.getItem('cart') as string);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState<ICart>(initialCart);

  useEffect(() => {
    let total = 0;
    cart.line_items.forEach((lineItem) => {
      total += lineItem.product.price * lineItem.amount;
    });
    setTotal(total);
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const deleteProduct = (id: number) => {
    const lineItems = cart.line_items.filter((item) => item.product.id !== id);
    setCart({
      ...cart,
      lineItems,
    });
  };

  const changeProductAmount = (productId: number, amount: number) => {
    const newProducts = cart.line_items.map((item) => {
      if (item.product.id === productId) {
        item.amount += amount;
      }
      return item;
    });
    setCart({
      ...cart,
      line_items: newProducts,
    });
  };

  return (
    <div className='bag-main'>
      <div className='bag-title'>
        <h1>Review your bag.</h1>
      </div>
      {cart.line_items.map((item) => (
        <BagProduct key={item.product.id} item={item} changeProductAmount={changeProductAmount}
          deleteProduct={deleteProduct}/>
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
  );
}

export default Bag;
