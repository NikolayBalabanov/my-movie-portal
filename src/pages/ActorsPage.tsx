import React, { FC, useEffect, useState } from 'react';
import { IActor } from '../models/actor';
import Loader from '../components/Loader';
import ActorsService from '../API/ActorsService';
import { useFetching } from '../hooks/useFetching';
import EmptyResult from '../components/EmptyResult';
import ErrorMessage from '../components/ErrorMessage';
import { SearchForm } from '../components/Search/SearchForm';
import ActorCard from '../components/ActorCard';

export const ActorsPage: FC = () => {
  const [actors, setActors] = useState<IActor[]>([]);
  const handleSearch = (searchValue: string) => {
    window.scroll(0, 0);
    if (searchValue) {
      searchActors(searchValue);
    } else {
      fetchActors();
    }
  };
  const {
    fetching: fetchActors,
    isLoading: isPostsLoading,
    error: fetchError,
  } = useFetching(async () => {
    const response = await ActorsService.getPopular();
    setActors(response.data.results as IActor[]);
  });
  const {
    fetching: searchActors,
    isLoading: isSearchLoading,
    error: searchedError,
  } = useFetching(async () => {
    const response = await ActorsService.searchActor('');
    setActors(response.data.results as IActor[]);
  });
  useEffect(() => {
    fetchActors();
  }, []);
  return (
    <div className="container mx-auto">
      <SearchForm placeholder="Search an actor..." onFormSubmit={(str) => handleSearch(str)} />
      <div>
        {(fetchError || searchedError) && <ErrorMessage content={fetchError || searchedError} />}
        {isPostsLoading || isSearchLoading ? (
          <Loader />
        ) : actors.length > 0 && !(fetchError || searchedError) ? (
          <ul className="grid grid-flow-row gap-2 lg:grid-cols-4 p-4 sm:grid-cols-2 grid-cols-1">
            {actors.map((actor) => (
              <ActorCard key={actor.id} actor={actor} />
            ))}
          </ul>
        ) : (
          <EmptyResult />
        )}
      </div>
    </div>
  );
};
