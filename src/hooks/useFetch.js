import { useState, useEffect } from 'react';

export const useFetch = (fetchFunc) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState();
  const [_refetch, _setRefetch] = useState();

  const refetch = () => _setRefetch(Math.random() * Math.random());

  useEffect(() => {
    let controller = new AbortController();
    setLoading(true);
    setError(false);

    fetchFunc()
      .then(({ data }) => {
        if (!controller.signal.aborted) {
          setData(data);
          setError(false);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });

    return () => controller.abort();
  }, [_refetch]);

  return {
    loading,
    error,
    data,
    refetch
  };
};
