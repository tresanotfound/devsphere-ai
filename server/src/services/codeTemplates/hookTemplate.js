export const hookTemplate = () => {

  return `
import {
  useState,
  useEffect,
} from "react";

const useFetch =
  (url) => {

    const [data, setData] =
      useState(null);

    const [loading, setLoading] =
      useState(true);

    useEffect(() => {

      const fetchData =
        async () => {

          const res =
            await fetch(url);

          const json =
            await res.json();

          setData(json);

          setLoading(false);
        };

      fetchData();

    }, [url]);

    return {

      data,

      loading,
    };
  };

export default useFetch;
`;
};