import {useEffect, useState} from 'react';
import axios, {AxiosError, AxiosResponse} from 'axios';

const useFetchData = (endpoint: string) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    if (!response) {
      setLoading(true);
      axios.get(`http://localhost:3001${endpoint}`)
        .then((_response) => setResponse(_response))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, []);

  return {response, loading, error};
};

export default useFetchData;
