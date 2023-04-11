import React, { useEffect } from 'react';
import Loader from '../components/Loader';
import EmptyResult from '../components/EmptyResult';
import ErrorMessage from '../components/ErrorMessage';
import { SearchForm } from '../components/Search/SearchForm';
import ActorCard from '../components/ActorCard';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
export const ActorsPage = () => {
    const { getActors, searchActors } = useActions();
    const { actors, error, isLoading } = useTypedSelector((state) => state.actors);
    useEffect(() => {
        getActors();
    }, []);
    const handleSearch = (searchValue) => {
        window.scroll(0, 0);
        searchValue ? searchActors(searchValue) : getActors();
    };
    const actorsNodes = actors.map((actor) => React.createElement(ActorCard, { key: actor.id, actor: actor }));
    return (React.createElement("div", { className: "container mx-auto pt-5" },
        React.createElement(SearchForm, { placeholder: "Search an actor...", onFormSubmit: (str) => handleSearch(str) }),
        React.createElement("div", null,
            error && React.createElement(ErrorMessage, { content: error }),
            isLoading && React.createElement(Loader, null),
            actors.length > 0 && (React.createElement("ul", { className: "grid grid-flow-row gap-2 lg:grid-cols-4 p-4 sm:grid-cols-2 grid-cols-1" }, actorsNodes)),
            actors.length === 0 && !isLoading && React.createElement(EmptyResult, null))));
};
