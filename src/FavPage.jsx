import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFav, clearFav } from './redux/Actions/Action';
import { Link } from 'react-router-dom';
import './FavPage.css';   // Import the page-specific styles

export default function FavPage() {
  const items = useSelector(state => state.fav.items);
  const dispatch = useDispatch();

  // A more visually appealing message for when no favorites are present
  if (!items || items.length === 0) {
    return (
      <div className="fav-page">
        <div className="container empty-fav-container">
          <h2>Your Favorites List is Empty</h2>
          <p>Looks like you haven't added any movies yet. Go find some you love!</p>
          <Link to="/" className="btn btn-lg btn-info">Browse Movies</Link>
        </div>
      </div>
    );
  }

  // The main view when there are favorite items
  return (
    <div className="fav-page">
      <div className="container">
        <div className="fav-actions">
          <h1 className="page-title">My Favorite Movies</h1>
          <button 
            onClick={() => dispatch(clearFav())} 
            className="btn btn-danger"
          >
            Clear All Favorites
          </button>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {items.map((movie) => (
            <div key={movie.id} className="col">
              <div className="movie-card">
                <div className="position-relative">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="card-img-top"
                    alt={movie.title}
                  />
                  <span className="rating-badge">⭐ {movie.vote_average.toFixed(1)}</span>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title flex-grow-1">{movie.title}</h5>
                  <div className="mt-auto">
                    <Link to={`/movie/${movie.id}`} className="btn btn-outline-info w-100 mb-2">
                      View Details
                    </Link>
                    <button 
                      onClick={() => dispatch(removeFav(movie.id))} 
                      className="btn btn-outline-danger w-100"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}