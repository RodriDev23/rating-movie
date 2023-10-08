import { useEffect, useState } from "react";
import axios from "axios";

interface QueryMovie {
  query: string | number | boolean;
}

export const useFetch = ({ query }: QueryMovie) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'ebe16d3b';
        const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(
          query
        )}&apikey=${apiKey}`;
        const response = await axios.get(apiUrl);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading };
};
