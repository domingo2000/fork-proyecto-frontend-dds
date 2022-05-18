import React from 'react';

import useFetchData from '../services/useFetchData';
import { CategoryWithProducts } from '../components/Category/Category';

function Home() {
  const { response, loading, error } = useFetchData('/categories/1');
  return (
    <div>
      <h1>Home</h1>
      {loading && <p>Loading...</p>}
      {error && (
      <p>
        Error:
        {' '}
        {error.message}
      </p>
      )}
      {response && (
      <div>
        <CategoryWithProducts category={response.data} />
      </div>
      )}
    </div>
  );
}

export default Home;
