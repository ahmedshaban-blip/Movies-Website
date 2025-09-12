// SearchResults.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from './redux/Action/Action'; // عدّلي المسار لو مختلف

const API_KEY = '29cf44b93ca83bf48d9356395476f7ad';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  // جلب قائمة ids للفافيورتس عشان نقدر نستخدم includes بسرعة
  const favIds = useSelector(state => state.fav.items.map(m => m.id));

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }
    const fetchSearch = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
        );
        setMovies(res.data.results || []);
      } catch (err) {
        console.error(err);
        setError('Failed to load search results.');
      } finally {
        setLoading(false);
      }
    };
    fetchSearch();
  }, [query, page]);

  return (
    <div className="movies-home container">
      <h2>Search results for "{query}"</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? <div>Loading...</div> : (
        <div className="row g-4">
          {movies.map(movie => {
            const isFav = favIds.includes(movie.id);
            return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={movie.id}>
                <div className="movie-card">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="card-img-top" />
                  <div className="card-body">
                    <h5>{movie.title}</h5>
                    <button
                      className="btn btn-outline-info w-100 mb-2"
                      onClick={() => dispatch(isFav ? removeFav(movie.id) : addFav(movie))}
                    >
                      {isFav ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                    <Link to={`/movie/${movie.id}`} className="btn btn-outline-info w-100">View Details</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
