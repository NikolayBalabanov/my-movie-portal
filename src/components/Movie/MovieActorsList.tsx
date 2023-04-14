import React, { useEffect } from 'react';
import { SwiperSlide } from 'swiper/react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ActorCard from '../Actor/ActorCard';
import { SwipedList } from '../../components/UI/SwipedList';

interface IMovieActorsListProps {
  movieId: number;
}

export default function MovieActorsList({ movieId }: IMovieActorsListProps) {
  const { getMovieActors } = useActions();
  const { movieActors } = useTypedSelector((state) => state.movie);
  useEffect(() => {
    getMovieActors(movieId);
  }, []);
  if (!movieActors.length) return <></>;
  const artorsList = movieActors.map((actor) => (
    <SwiperSlide key={actor.id}>
      <ActorCard actorId={actor.id} name={actor.original_name} imgPath={actor.profile_path} />
    </SwiperSlide>
  ));

  return (
    <div className="w-full mb-3">
      <SwipedList>{artorsList}</SwipedList>
    </div>
  );
}
