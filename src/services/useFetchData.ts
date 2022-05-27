import {useEffect, useState} from 'react';
import axios, {AxiosError, AxiosResponse} from 'axios';
import config from '../config/config';

const useFetchData = (endpoint: string) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    if (!response) {
      setLoading(true);
      axios.get(`${config.API_URL}${endpoint}`)
        .then((_response) => setResponse(_response))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, []);

  return {response, loading, error};
};

export default useFetchData;
