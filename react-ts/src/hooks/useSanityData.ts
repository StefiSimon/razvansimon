import { useEffect, useState } from 'react';
import { sanityClient } from '../api/client';

export type sanityDataPages = 'home' | 'about' | 'artworks' | 'contact';
export const useSanityData = (
  name: sanityDataPages
): { data: any[] | null; error: string | Error | null } => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "${name}"]`)
      .then((res) => setData(res))
      .catch((err) => {
        setError(err);
        console.error(err);
      });
  }, [name]);

  return { data, error };
};
