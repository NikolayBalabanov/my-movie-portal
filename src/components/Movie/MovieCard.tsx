import { IMovie } from '../../models/movie';
import React from 'react';
import { Link } from 'react-router-dom';

interface IMovieCard {
  movie: IMovie;
}

export default function MovieCard({ movie }: IMovieCard) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="relative h-full flex flex-col justify-between p-2 gap-3 group bg-slate-800 shadow-md rounded-lg"
    >
      <span
        className={`absolute z-10 pointer-events-none -top-1 -right-1 p-1 flex w-10 h-10 items-center justify-center rounded-full ${
          movie.vote_average > 6 ? 'bg-green-500' : 'bg-red-500 '
        }`}
      >
        {movie.vote_average.toFixed(1)}
      </span>
      <div className="overflow-hidden h-full rounded-lg relative ">
        <img
          className="card-img"
          src={`https://image.tmdb.org/t/p/original${
            movie.poster_path ? movie.poster_path : '/aEsAdMAhwKYFgnHHxMOknktQYKK.jpg'
          }`}
          alt={movie.title}
        />
        <span className="absolute bottom-0 left-0 px-4 py-2 rounded-lg text-center text-gray-100 font-black text-base bg-slate-500  ">
          {movie ? movie.release_date.slice(0, 4) : ''}
        </span>
      </div>
      <h3 className="text-center text-gray-200 font-black text-base ">
        {movie ? movie.original_title : ''}
      </h3>
    </Link>
  );
}
