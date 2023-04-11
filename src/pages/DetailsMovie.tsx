import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IDetailedMovie } from '../models/movie';
import Loader from '../components/Loader';
import MoviesService from '../API/MoviesService';
import MovieActorsList from '../components/Movie/MovieActorsList';
import { useFetching } from '../hooks/useFetching';
import ErrorMessage from '../components/ErrorMessage';
import { BIG_IMG, PLACEHOLDER_IMG } from '../utils/consts';
import { ButtonTrailer } from '../components/UI/ButtonTrailer';

interface MoviePageParams {
  [n: string]: string;
}

export const DetailsMovie: FC = () => {
  const params = useParams<MoviePageParams>();
  const [movie, setMovie] = useState<IDetailedMovie>();
  const { fetching, isLoading, error } = useFetching(async () => {
    const response = await MoviesService.getModieById(params.id!);
    setMovie(response.data);
  });

  useEffect(() => {
    fetching();
  }, []);

  const getPosterImg = () => {
    if (movie) {
      return movie.poster_path ? BIG_IMG + movie.poster_path : PLACEHOLDER_IMG;
    }
  };

  return (
    <div className="container mx-auto p-10">
      {isLoading && <Loader />}
      {error && <ErrorMessage content={error} />}
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
