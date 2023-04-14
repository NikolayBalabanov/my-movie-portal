import React, { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface IButtonTrailer {
  movieId: number;
}

export const ButtonTrailer: FC<IButtonTrailer> = ({ movieId }) => {
  const { getMovieTrailer } = useActions();
  const { trailerLink } = useTypedSelector((state) => state.movie);
  useEffect(() => {
    getMovieTrailer(movieId);
  }, []);

  if (!trailerLink) {
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
