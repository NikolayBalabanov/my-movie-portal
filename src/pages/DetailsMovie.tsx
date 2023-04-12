import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { useActions } from '../hooks/useActions';
import ErrorMessage from '../components/ErrorMessage';
import { BIG_IMG, PLACEHOLDER_IMG } from '../utils/consts';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ButtonTrailer } from '../components/UI/ButtonTrailer';
import MovieActorsList from '../components/Movie/MovieActorsList';

interface MoviePageParams {
  [n: string]: string;
}

export const DetailsMovie: FC = () => {
  const { getMovieById } = useActions();
  const { movie, movieError, isLoading } = useTypedSelector((state) => state.movie);
  const params = useParams<MoviePageParams>();
  useEffect(() => {
    getMovieById(`${params.id}`);
  }, []);
  const getPosterImg = () => {
    if (movie) {
      return movie.poster_path ? BIG_IMG + movie.poster_path : PLACEHOLDER_IMG;
    }
  };

  return (
    <div className="container mx-auto p-10">
      {isLoading && <Loader />}
      {movieError && <ErrorMessage content={movieError} />}
      {movie && (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 place-content-center">
          <div className="col-span-1 flex justify-center">
            <img
              className="object-fill h-full lg:w-full w-2/3 rounded-lg bg-gray-400 aspect-auto shadow-xl shadow-black"
              src={getPosterImg()}
              alt={movie.title}
            />
          </div>
          <div className="col-span-2 flex flex-col h-full items-center justify-center w-full text-slate-200">
            <h3 className="md:mb-5 mb-3 font-bold lg:text-4xl text-3xl text-center ">
              {movie.title}
            </h3>
            <p className="mb-3 rounded-lg text-center">{movie.overview}</p>
            <MovieActorsList movieId={movie.id} />
            <ButtonTrailer movieId={movie.id} />
          </div>
        </div>
      )}
    </div>
  );
};
