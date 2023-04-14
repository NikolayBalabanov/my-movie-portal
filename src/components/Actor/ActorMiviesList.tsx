import React, { useEffect } from 'react';
import { SwiperSlide } from 'swiper/react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MovieCard from '../../components/Movie/MovieCard';
import { SwipedList } from '../../components/UI/SwipedList';

interface IActorMiviesListProps {
  actorId: number;
}

export default function ActorMiviesList({ actorId }: IActorMiviesListProps) {
  const { getActorMovies } = useActions();
  const { actorMovies } = useTypedSelector((state) => state.actor);
  useEffect(() => {
    getActorMovies(actorId);
  }, []);
  if (!actorMovies.length) return <></>;
  const moviesList = actorMovies.map((movie) => (
    <SwiperSlide key={movie.id}>
      <MovieCard isListItem={true} movie={movie} />
    </SwiperSlide>
  ));

  return (
    <div className="w-full mb-3 col-span-full">
      <SwipedList>{moviesList}</SwipedList>
    </div>
  );
}
