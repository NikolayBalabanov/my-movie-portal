import React, { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { useActions } from '../hooks/useActions';
import EmptyResult from '../components/EmptyResult';
import ActorCard from '../components/Actor/ActorCard';
import ErrorMessage from '../components/ErrorMessage';
import { SearchForm } from '../components/Search/SearchForm';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { PaginationBoard } from '../components/PaginationBoard';

export const ActorsPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const searchActor = searchParams.get('search-actor') || '';
  const { getActors, searchActors } = useActions();
  const { actors, error, isLoading, totalPages } = useTypedSelector((state) => state.actors);
  const handlePaginate = (event: React.ChangeEvent<unknown>, value: number) => {
    searchParams.set('page', value.toString());
    setSearchParams(searchParams);
  };
  useEffect(() => {
    if (searchActor) {
      searchActors(searchActor, +page);
    } else {
      getActors(+page);
    }
  }, [page, searchActor]);
  const actorsNodes = actors.map((actor) => (
    <ActorCard key={actor.id} imgPath={actor.profile_path} actorId={actor.id} name={actor.name} />
  ));

  return (
    <div className="container mx-auto pt-5">
      <SearchForm placeholder="Search an actor..." mode="search-actor" />
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
      {actors.length !== 0 && (
        <PaginationBoard onPaginate={handlePaginate} page={+page} totalPages={totalPages} />
      )}
    </div>
  );
};
