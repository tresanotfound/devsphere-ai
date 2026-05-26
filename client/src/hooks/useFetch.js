import {

  useEffect,

  useState,

} from 'react';

function useFetch(fetchFunction) {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetchFunction().then(setData);

  }, [fetchFunction]);

  return data;
}

export default useFetch;