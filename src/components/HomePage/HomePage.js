import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import moviesAPI from '../services/api';
// import MovieErrorView from '../MovieErrorView/MovieErrorView';
// import MoviePendingView from '../MoviePendingView/MoviePendingView';
import s from '../HomePage/HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const srcUrl = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();

  useEffect(() => {
    moviesAPI.fetchTrendingMovieForHomepage().then(res => setMovies(res));
  }, []);

  return (
    <>
      <p className={s.title}>Trending today</p>
      <ul className={s.list}>
        {movies.map(({ poster_path, title, id }) => (
          <li key={id} className={s.item}>
            <Link
              className={s.link}
              to={{
                pathname: `/goit-react-hw-04-movies/movies/${id}`,
                state: {
                  from: location.pathname,
                },
              }}
            >
              <img
                src={`${srcUrl}${poster_path}`}
                alt=""
                width="180"
                height="240"
              />
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
