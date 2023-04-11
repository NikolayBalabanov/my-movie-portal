import axios from 'axios';
export default class MoviesService {
    static async getPopular(query = 'popular') {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${query}?api_key=${import.meta.env.VITE_APP_APY_KEY}`, {
            params: {
                language: 'en-US',
                page: 1,
            },
        });
        return response;
    }
    static async searchMovie(search = '') {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_APP_APY_KEY}`, {
            params: {
                language: 'en-US',
                page: 1,
                query: search,
                include_adult: false,
            },
        });
        return response;
    }
    static async getMovieById(id) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_APP_APY_KEY}`, {
            params: {
                language: 'en-US',
            },
        });
        return response;
    }
    static async getTrailerByMovieId(id) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${import.meta.env.VITE_APP_APY_KEY}`, {
            params: {
                language: 'en-US',
            },
        });
        return response;
    }
    static async getActorsByMovieId(id) {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_APP_APY_KEY}`, {
            params: {
                language: 'en-US',
            },
        });
        return response;
    }
}
// export type TGetPopular = typeof MoviesService.getPopular;
// export type TSearchMovie = typeof MoviesService.searchMovie;
