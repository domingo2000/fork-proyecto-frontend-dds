import ImageBanner from '../../components/ProductCheckout/ImageBanner';
import ProductInfo from '../../components/ProductCheckout/ProductInfo';
import useFetchData from '../../hooks/useFetchData';
import { Product as IProduct } from '../../interfaces/product';
import { useParams } from 'react-router-dom';

function ProductCheckout() {
  const { id } = useParams();
  const {
    data,
    loading
  } = useFetchData(`/products/${id}`);

  const product = data as unknown as IProduct;

  return (
    <div className="product-checkout-main">
      {loading && <div>Loading...</div>}
      {!loading && <ProductInfo product={product}/>}
      {!loading && <ImageBanner product={product}/>}
    </div>
  )
}

export default ProductCheckout;