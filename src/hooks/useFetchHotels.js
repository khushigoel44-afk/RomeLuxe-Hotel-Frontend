import { useState, useEffect } from 'react';

export const useFetchHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchHotels = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://demohotelsapi.pythonanywhere.com/hotels/');
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText} (${response.status})`);
        }
        
        const json = await response.json();
        if (isMounted) {
          if (json && Array.isArray(json.data)) {
            setHotels(json.data);
          } else {
            throw new Error('Invalid data format received from server.');
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'An unexpected error occurred while loading hotels.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchHotels();

    return () => {
      isMounted = false;
    };
  }, []);

  return { hotels, loading, error };
};
