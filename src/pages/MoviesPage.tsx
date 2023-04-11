import React, { FC, useEffect, useState } from 'react';
import { SearchForm } from '../components/Search/SearchForm';
import { useFetching } from '../hooks/useFetching';
import MoviesService from '../API/MoviesService';
import { IMovie } from '../models/movie';
import MovieCard from '../components/Movie/MovieCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import EmptyResult from '../components/EmptyResult';

export const MoviesPage: FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const handleSearch = (searchValue: string) => {
    window.scroll(0, 0);
    if (searchValue) {
      searchedPosts(searchValue);
    } else {
      fetchPosts();
    }
  };
  const {
    fetching: fetchPosts,
    isLoading: isPostsLoading,
    error: fetchError,
  } = useFetching(async () => {
    const response = await MoviesService.getPopular();
    setMovies(response.data.results as IMovie[]);
  });
  const {
    fetching: searchedPosts,
    isLoading: isSearchedLoading,
    error: searchedError,
  } = useFetching(async () => {
    const response = await MoviesService.searchMovie('');
    setMovies(response.data.results as IMovie[]);
  });
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="container mx-auto">
      <SearchForm placeholder="Search a movie..." onFormSubmit={(str) => handleSearch(str)} />
      <div>
        {(fetchError || searchedError) && <ErrorMessage content={fetchError || searchedError} />}
        {isPostsLoading || isSearchedLoading ? (
          <Loader />
        ) : movies.length > 0 && !(fetchError || searchedError) ? (
          <ul className="grid grid-flow-row gap-2 lg:grid-cols-4 p-4 sm:grid-cols-2 grid-cols-1">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </ul>
        ) : (
          <EmptyResult />
        )}
      </div>
    </div>
  );
};
