import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MovieActor from './MovieActor';
import { IMovieActor } from '../../models/actor';
import MoviesService from '../../API/MoviesService';
import { useFetching } from '../../hooks/useFetching';

interface IMovieActorsListProps {
  movieId: number;
}

export default function MovieActorsList({ movieId }: IMovieActorsListProps) {
  const [actors, setActors] = useState<IMovieActor[]>([]);
  const { fetching } = useFetching(async () => {
    const response = await MoviesService.getActorsByModieId(movieId);
    setActors(response.data.cast);
  });
  const artorsList = actors.map((actor) => (
    <SwiperSlide key={actor.id}>
      <MovieActor name={actor.original_name} imgPath={actor.profile_path} />
    </SwiperSlide>
  ));
  useEffect(() => {
    fetching();
  }, []);
  return (
    <div className="w-full mb-3">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        autoplay={{ delay: 3000 }}
        loop
      >
        {artorsList}
      </Swiper>
    </div>
  );
}
