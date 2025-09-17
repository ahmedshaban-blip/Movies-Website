import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';
import { useSelector } from 'react-redux';

const MovieDetailsStyles = () => (
  <style>{`
    
  `}</style>
);


const MovieDetails = () => {
  const { id } = useParams();
  const lang = useSelector((s) => s.i18n?.lang === 'ar' ? 'ar-SA' : 'en-US');

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchMovie = async () => {
      // Add a small delay to see the skeleton loader
      await new Promise(resolve => setTimeout(resolve, 500));
      try {
         const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: {
           api_key: '29cf44b93ca83bf48d9356395476f7ad',
            append_to_response: 'credits',
            language: lang,
          }
        });
        setMovie(res.data);
      } catch (err) {
        console.error("Failed to fetch movie details:", err);
        setError("Could not load movie details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  // A component for the detailed skeleton loader
  const SkeletonLoader = () => (
    <div className="movie-details-page">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-5">
                    <div className="skeleton poster"></div>
                </div>
                <div className="col-lg-8 col-md-7">
                    <div className="skeleton title"></div>
                    <div className="skeleton line"></div>
                    <div className="skeleton line-short"></div>
                    <br/>
                    <div className="skeleton line"></div>
                    <div className="skeleton line"></div>
                    <div className="skeleton line"></div>
                    <div className="skeleton line-short"></div>
                </div>
            </div>
        </div>
    </div>
  );

  if (loading) {
    return (
      <>
        <MovieDetailsStyles />
        <SkeletonLoader />
      </>
    );
  }

  if (error) {
    return (
      <>
        <MovieDetailsStyles />
        <div className="error-container">
          <div className="alert alert-danger">{error}</div>
        </div>
      </>
    );
  }

  if (!movie) return null;

  return (
    <>
      <MovieDetailsStyles />
      <div className="movie-details-page">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-4 col-md-5 mb-4 mb-md-0 text-center">
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://placehold.co/500x750/1c2b36/61dafb?text=No+Image'}
                alt={movie.title}
                className="movie-poster-details"
              />
            </div>

            <div className="col-lg-8 col-md-7 movie-info">
              <h1>{movie.title}</h1>
              
              {movie.tagline && <p className="lead">"{movie.tagline}"</p>}
              
              <div className="d-flex align-items-center mb-4 flex-wrap">
                <span className="rating-pill me-3 mb-2">
                  ⭐ {movie.vote_average.toFixed(1)} / 10
                </span>
                <span className="text-muted mb-2">({movie.vote_count.toLocaleString()} votes)</span>
              </div>

              <h5 className="section-title">Overview</h5>
              <p>{movie.overview}</p>

              <h5 className="section-title">Details</h5>
              <ul className="list-unstyled">
                <li><strong>Release Date:</strong> {movie.release_date}</li>
                {movie.genres && <li><strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}</li>}
                <li><strong>Runtime:</strong> {movie.runtime} minutes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;

