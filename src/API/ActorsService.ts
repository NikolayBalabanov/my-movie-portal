import axios from 'axios';

export default class ActorsService {
  static async getPopular(page = 1) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_APP_APY_KEY}`,
      {
        params: {
          language: 'en-US',
          page,
        },
      }
    );
    return response;
  }

  static async searchActor(query = '', page = 1) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/person?api_key=${import.meta.env.VITE_APP_APY_KEY}`,
      {
        params: {
          language: 'en-US',
          page,
          query,
          include_adult: false,
        },
      }
    );
    return response;
  }

  static async getActorById(id: string) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_APP_APY_KEY}`,
      {
        params: {
          language: 'en-US',
        },
      }
    );
    return response;
  }
}

// export type TGetPopular = typeof MoviesService.getPopular;
// export type TSearchMovie = typeof MoviesService.searchMovie;
