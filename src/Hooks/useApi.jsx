import { useState, useEffect } from 'react';

const useApi = (url, method, initialData = [], options = {}) => {
  const [data, setData] = useState(initialData);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
        try {
            let response;
            if (method === 'GET') {
              response = await fetch(url); 

            } else {
              response = await fetch(url, {
                method,
                headers: {
                  'Content-Type': 'application/json',
                  ...options.headers,
                },
                body: JSON.stringify(options.body), 
              });
            }
        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);
          setErrorMessage(null); 
        } else {
          setErrorMessage(`Error al obtener datos: ${response.status}`);
        }
      } catch (error) {
        console.error('Error al usar useApi:', error);
        setErrorMessage('Error al conectarse al servidor.');
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, [url, method, options]);

  return { data, errorMessage, isLoading };
};

export default useApi;