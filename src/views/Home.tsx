import React, { useEffect, useState } from 'react';
import { IProduct } from '../interfaces/IProduct';
import useFetchData from '../services/useFetchData';
import HomeProduct from '../components/Home/HomeProduct';
import HomeCard from '../components/Home/HomeCard';
import { IHomeCardInfo } from '../interfaces/IHomeCardInfo'; 

const cards: IHomeCardInfo[] = [
  {
    id: 1,
    title: 'Displays',
    subtitle: 'Browse all our displays',
    image: 'studio-display',
    link: {
      path: '/products',
      name: 'See All'
    }
  },
  {
    id: 2,
    title: 'Enjoy amazing product experiences',
    subtitle: 'Benefit from our exclusive offers',
    image: 'all-products',
    link: {
      path: '/products',
      name: 'See All'
    }
  },
]

function Home() {
  const { response, loading, error } = useFetchData('/products');
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (response) {
      setProducts(response.data.slice(0, 3));
    }
  }, [response]);

  return (
    <div className='min-h-screen'>
      { products.map(product => <HomeProduct key={product.id} product={product} />) }

      <div className="grid grid-cols-2 gap-2">
        { cards.map(card => <HomeCard key={card.id} card={card} />) }
      </div>
    </div>
  );
}

export default Home;
