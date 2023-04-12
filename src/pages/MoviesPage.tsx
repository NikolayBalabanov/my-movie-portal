import React, { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { useActions } from '../hooks/useActions';
import Select from '../components/UI/Select/Select';
import EmptyResult from '../components/EmptyResult';
import MovieCard from '../components/Movie/MovieCard';
import ErrorMessage from '../components/ErrorMessage';
import { EMoviesFilter } from '../types/EMoviesFilter';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { SearchForm } from '../components/Search/SearchForm';
import { PaginationBoard } from '../components/PaginationBoard';
import { selectFieldsMovies } from '../utils/selectFieldsMovies';

export const MoviesPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const searchMovie = searchParams.get('search-movie') || '';
  const filterQuery = searchParams.get('filter') || EMoviesFilter.popular;
  const { movies, isLoading, error, totalPages } = useTypedSelector((state) => state.movies);
  const { getMovies, searchMovies } = useActions();
  const handlePaginate = (event: React.ChangeEvent<unknown>, value: number) => {
    searchParams.set('page', value.toString());
    setSearchParams(searchParams);
  };
  const moviesCards = movies.map((movie) => (
    <MovieCard movie={movie} isListItem={false} key={movie.id} />
  ));
  useEffect(() => {
    if (searchMovie) {
      searchMovies(searchMovie, +page);
    } else {
      getMovies(filterQuery, +page);
    }
  }, [searchMovie, page, filterQuery]);
  return (
    <div className="container mx-auto">
      <div className="mx-auto max-w-2xl pt-5 flex gap-4 justify-around items-center sm:flex-row flex-col">
        <SearchForm placeholder="Search a movie..." mode="search-movie" />
        <Select selectFields={selectFieldsMovies} />
      </div>
      <div>
        {error && <ErrorMessage content={error} />}
        {isLoading && <Loader />}
        {movies.length > 0 && (
          <ul className="grid grid-flow-row gap-2 xl:grid-cols-6 md:grid-cols-4 p-4 sm:grid-cols-3 grid-cols-2">
            {moviesCards}
          </ul>
        )}
        {!isLoading && movies.length === 0 && <EmptyResult />}
      </div>
      {totalPages > 0 && (
        <PaginationBoard onPaginate={handlePaginate} page={+page} totalPages={totalPages} />
      )}
    </div>
  );
};
