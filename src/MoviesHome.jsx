


// src/MoviesHome.jsx
import React, { useEffect,useState  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from './redux/Actions/Action';
import { Link } from 'react-router-dom';
import './MoviesHome.css';
import {Pagination} from "./pagination"

import {
  fetchMovies,
  setSearchTerm,
  setPage,
} from './action';
import { fetchUpcomingMovies } from './action';

const MoviesHome = () => {
  const dispatch = useDispatch();

  const {
    items: movies,
    page,
    totalPages,
    loading,
    error,
    searchTerm,
  } = useSelector((state) => state.movies);
  const lang = useSelector((state) => state.i18n?.lang || 'en');

  const favItems = useSelector((state) => state.fav.items);
  const [category, setCategory] = useState('now');

  // استدعاء الثنك مع debounce
useEffect(() => {
  const id = setTimeout(() => {
    if (searchTerm && searchTerm.trim()) {
      dispatch(fetchMovies(page, searchTerm));
    } else if (category === 'upcoming') {
      dispatch(fetchUpcomingMovies(page));
    } else {
      dispatch(fetchMovies(page, ''));
    }
  }, 300);
  return () => clearTimeout(id);
}, [dispatch, page, searchTerm, category, lang]);





  const SkeletonCard = () => (
    <div className="col">
      <div className="skeleton-card">
        <div className="skeleton image"></div>
        <div className="skeleton title"></div>
        <div className="skeleton text"></div>
      </div>
    </div>
  );

  return (
    <div className="movies-home">
      <div className="container">

              <div className="d-flex align-items-center justify-content-between mb-3">
          <h1 className="page-title m-0">
            {searchTerm
              ? (lang === 'ar' ? `نتائج "${searchTerm}"` : `Results for "${searchTerm}"`)
              : (category === 'upcoming'
                    ? (lang === 'ar' ? 'أفلام قادمة' : 'Upcoming Movies')
                    : (lang === 'ar' ? 'أفلام تُعرض الآن' : 'Now Playing Movies'))}
         </h1>
         <div className="btn-group">
            <button
              className={`btn ${category==='now' ? 'btn-info' : 'btn-outline-info'}`}
              onClick={()=> setCategory('now')}
            >
              {lang==='ar' ? 'الآن' : 'Now'}
            </button>
            <button
              className={`btn ${category==='upcoming' ? 'btn-info' : 'btn-outline-info'}`}
              onClick={()=> setCategory('upcoming')}
            >
              {lang==='ar' ? 'القادم' : 'Upcoming'}
            </button>
          </div>
        </div>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
        </div>

        {error && <div className="alert-danger">{error}</div>}

        <div className="row">
          {loading
            ? Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)
            : movies.map((movie) => {
                const isFav = favItems.some((m) => m.id === movie.id);
                return (
                  <Link key={movie.id} to={`/movie/${movie.id}`} className="col">
                    <div className="movie-card">
                      <div className="position-relative">
                        <img
                          src={
                            movie.poster_path
                              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                              : 'https://placehold.co/500x750/1c2b36/61dafb?text=No+Image'
                          }
                          className="card-img-top"
                          alt={movie.title}
                        />
                        <span className="rating-badge">
                          ⭐ {movie.vote_average?.toFixed(1) ?? '—'}
                        </span>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <button
                          className={`btn btn-fav w-100 ${isFav ? 'active' : ''}`}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (isFav) dispatch(removeFav(movie.id));
                            else dispatch(addFav(movie));
                          }}
                        >
                          {isFav ? '❤️ In Favorites' : '＋ Add to Favorites'}
                        </button>
                      </div>
                    </div>
                  </Link>
                );
              })}
        </div>

        {!loading && !error && totalPages > 1 && (
          <div className="pagination-controls">
            <button
              onClick={() => dispatch(setPage(Math.max(page - 1, 1)))}
              disabled={page === 1}
              className="btn"
            >
              ⬅ Previous
            </button>
 <span className="page-info  text-white ">
              {lang === 'ar'
                ? `الصفحة ${page} من ${totalPages} `
                : `Page ${page} of ${totalPages}`}
            </span>            <button
              onClick={() => dispatch(setPage(Math.min(page + 1, totalPages)))}
              disabled={page === totalPages}
              className="btn"
            >
              Next ➡
            </button>
          </div>

          
        )}
      </div>
    </div>
  );
};

export default MoviesHome;
