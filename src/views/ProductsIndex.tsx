import useFetchData from '../hooks/useFetchData'
import { IProduct } from '../interfaces/IProduct'
import Product from '../components/Product'

function CoffeeIndex() {
  const {
    data,
    loading,
  } = useFetchData('/products')

  return (
    <div>
      <h1>Products</h1>
      {loading && <p>Loading...</p>}
      {data && (
        <ul>
          {data.map((product: IProduct) => (
            <Product
              key={product.id}
              product={product}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default CoffeeIndex