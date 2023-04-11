import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
export const ButtonTrailer = ({ movieId }) => {
    const { getMovieTrailer } = useActions();
    const { trailerLink } = useTypedSelector((state) => state.movie);
    useEffect(() => {
        getMovieTrailer(movieId);
    }, []);
    if (!trailerLink) {
        return React.createElement(React.Fragment, null);
    }
    return (React.createElement("a", { className: "mb-[10px] px-4 py-1 self-center rounded-lg border-none bg-red-500 hover:bg-red-600 focus-visible:bg-gray-600 outline-none", href: `https://www.youtube.com/watch?v=${trailerLink}`, target: "_blank", rel: "noreferrer" }, "Watch trailer!"));
};
