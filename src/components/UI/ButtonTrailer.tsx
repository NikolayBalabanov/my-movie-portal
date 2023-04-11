import React, { FC, useEffect, useState } from 'react';
import MoviesService from '../../API/MoviesService';
import { useFetching } from '../../hooks/useFetching';

interface IButtonTrailer {
  movieId: number;
}

export const ButtonTrailer: FC<IButtonTrailer> = ({ movieId }) => {
  const [trailerLink, setTrailerLink] = useState<string>('');
  const { fetching, isLoading, error } = useFetching(async () => {
    const response = await MoviesService.getTrailerByModieId(movieId);
    setTrailerLink(response.data.results[0]?.key);
  });
  useEffect(() => {
    fetching();
  }, []);

  if (isLoading || error) {
    return <></>;
  }

  return (
    <a
      className="mb-[10px] px-4 py-1 self-center rounded-lg border-none bg-red-500 hover:bg-red-600 focus-visible:bg-gray-600 outline-none"
      href={`https://www.youtube.com/watch?v=${trailerLink}`}
      target="_blank"
      rel="noreferrer"
    >
      Watch trailer!
    </a>
  );
};
