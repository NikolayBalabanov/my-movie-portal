import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MovieActor from './MovieActor';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
export default function MovieActorsList({ movieId }) {
    const { getMovieActors } = useActions();
    const { movieActors } = useTypedSelector((state) => state.movie);
    useEffect(() => {
        getMovieActors(movieId);
    }, []);
    if (!movieActors.length)
        return React.createElement(React.Fragment, null);
    const artorsList = movieActors.map((actor) => (React.createElement(SwiperSlide, { key: actor.id },
        React.createElement(MovieActor, { name: actor.original_name, imgPath: actor.profile_path }))));
    return (React.createElement("div", { className: "w-full mb-3" },
        React.createElement(Swiper, { modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay], spaceBetween: 10, slidesPerView: 5, navigation: true, autoplay: { delay: 3000 }, loop: true }, artorsList)));
}
