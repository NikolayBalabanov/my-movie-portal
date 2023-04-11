import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NeverPage from './pages/NeverPage';
import { MoviesPage } from './pages/MoviesPage';
import { DetailsMovie } from './pages/DetailsMovie';
import { ActorsPage } from './pages/ActorsPage';
import { DetailsActor } from './pages/DetailsActor';
import { Provider } from 'react-redux';
import { store } from './redux/store';
function App() {
    return (React.createElement(Provider, { store: store },
        React.createElement("div", { className: "App" },
            React.createElement(Header, null),
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(MoviesPage, null) }),
                React.createElement(Route, { path: "/movies", element: React.createElement(MoviesPage, null) }),
                React.createElement(Route, { path: "/actors", element: React.createElement(ActorsPage, null) }),
                React.createElement(Route, { path: "/movie/:id", element: React.createElement(DetailsMovie, null) }),
                React.createElement(Route, { path: "/actor/:id", element: React.createElement(DetailsActor, null) }),
                React.createElement(Route, { path: "/*", element: React.createElement(NeverPage, null) })))));
}
export default App;
