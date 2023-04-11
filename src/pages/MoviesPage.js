import React, { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';
import Loader from '../components/Loader';
import Select from '../components/UI/Select/Select';
import EmptyResult from '../components/EmptyResult';
import MovieCard from '../components/Movie/MovieCard';
import ErrorMessage from '../components/ErrorMessage';
import { EMoviesFilter } from '../types/EMoviesFilter';
import { SearchForm } from '../components/Search/SearchForm';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { selectFieldsMovies } from '../utils/selectFieldsMovies';
export const MoviesPage = () => {
    const { movies, isLoading, error } = useTypedSelector((state) => state.movies);
    const [filter, setFilter] = useState(EMoviesFilter.popular);
    const { getMovies, searchMovies } = useActions();
    const handleFilter = (e) => {
        getMovies(e);
        setFilter(e);
    };
    const handleSearch = (searchValue) => {
        window.scroll(0, 0);
        if (searchValue) {
            searchMovies(searchValue);
        }
        else {
            getMovies();
        }
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (React.createElement("div", { className: "container mx-auto" },
        React.createElement("div", { className: "mx-auto max-w-2xl pt-5 flex gap-4 justify-around items-center sm:flex-row flex-col" },
            React.createElement(SearchForm, { placeholder: "Search a movie...", onFormSubmit: (str) => handleSearch(str) }),
            React.createElement(Select, { selectFields: selectFieldsMovies, current: filter, onChange: (e) => handleFilter(e) })),
        React.createElement("div", null,
            error && React.createElement(ErrorMessage, { content: error }),
            isLoading && React.createElement(Loader, null),
            movies.length > 0 && (React.createElement("ul", { className: "grid grid-flow-row gap-2 lg:grid-cols-4 p-4 sm:grid-cols-2 grid-cols-1" }, movies.map((movie) => (React.createElement(MovieCard, { movie: movie, key: movie.id }))))),
            !isLoading && movies.length === 0 && React.createElement(EmptyResult, null))));
};
