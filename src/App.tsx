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
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MoviesPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/actors" element={<ActorsPage />} />
          <Route path="/movie/:id" element={<DetailsMovie />} />
          <Route path="/actor/:id" element={<DetailsActor />} />
          <Route path="/*" element={<NeverPage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
