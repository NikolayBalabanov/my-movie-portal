import React, { FC, useEffect } from 'react';
import Loader from '../components/Loader';
import EmptyResult from '../components/EmptyResult';
import ErrorMessage from '../components/ErrorMessage';
import { SearchForm } from '../components/Search/SearchForm';
import ActorCard from '../components/Actor/ActorCard';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const ActorsPage: FC = () => {
  const { getActors, searchActors } = useActions();
  const { actors, error, isLoading } = useTypedSelector((state) => state.actors);
  useEffect(() => {
    getActors();
  }, []);
  const handleSearch = (searchValue: string) => {
    window.scroll(0, 0);
    searchValue ? searchActors(searchValue) : getActors();
  };
  const actorsNodes = actors.map((actor) => (
    <ActorCard key={actor.id} imgPath={actor.profile_path} actorId={actor.id} name={actor.name} />
  ));

  return (
    <div className="container mx-auto pt-5">
      <SearchForm placeholder="Search an actor..." onFormSubmit={(str) => handleSearch(str)} />
      <div>
        {error && <ErrorMessage content={error} />}
        {isLoading && <Loader />}
        {actors.length > 0 && (
          <ul className="grid grid-flow-row gap-2 xl:grid-cols-6 md:grid-cols-4 p-4 sm:grid-cols-3 grid-cols-2">
            {actorsNodes}
          </ul>
        )}
        {actors.length === 0 && !isLoading && <EmptyResult />}
      </div>
    </div>
  );
};
