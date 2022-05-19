import ImageBanner from '../../components/ProductCheckout/ImageBanner';
import ProductInfo from '../../components/ProductCheckout/ProductInfo';
import useFetchData from '../../services/useFetchData';
import {IProduct} from '../../interfaces/IProduct';
import {useParams} from 'react-router-dom';

function ProductCheckout() {
  const {id} = useParams();
  const {
    response,
    loading,
  } = useFetchData(`/products/${id}`);

  if (!response) {
    return null;
  }

  const product = response.data as unknown as IProduct;

  return (
    <div className="product-checkout-main">
      {loading && <div>Loading...</div>}
      {!loading && <ProductInfo product={product}/>}
      {!loading && <ImageBanner product={product}/>}
      {!loading && <div className='product-info-title' id='mobile-title'>
        <h1>{product.name}</h1>
      </div>}
    </div>
  );
}

export default ProductCheckout;
