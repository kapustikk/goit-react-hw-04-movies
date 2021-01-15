import { useState, useEffect } from 'react';
import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moviesAPI from '../services/api';
import MoviePendingView from '../MoviePendingView/MoviePendingView';
import NotFound from '../NotFound404/NotFound';
import s from '../MoviesPage/MoviesPage.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  const [request, setRequest] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const { url } = useRouteMatch();
  const location = useLocation();

  const handleRequestChange = ev => {
    setQuery(ev.currentTarget.value.toLowerCase());
  };

  const handleSubmit = ev => {
    ev.preventDefault();

    if (query.trim() === '') {
      toast('What would you like to find?');
      return;
    }
    setRequest(query);
  };

  useEffect(() => {
    setStatus(Status.PENDING);
    const renderMovies = () => {
      moviesAPI
        .fetchMovies(request)
        .then(setMovies)
        .then(setStatus(Status.RESOLVED))
        .catch(err => {
          setError(err);
          setStatus(Status.REJECTED);
        });
    };
    renderMovies();
  }, [request]);

  return (
    <>
      {status === Status.PENDING && <MoviePendingView />}

      {status === Status.REJECTED && <NotFound message={error} />}

      {status === Status.RESOLVED && (
        <>
          <form className={s.form} onSubmit={handleSubmit}>
            <input
              className={s.input}
              value={query}
              onChange={handleRequestChange}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movie"
            />
            <button className={s.button} type="submit">
              <span>Search</span>
            </button>
          </form>

          {movies && (
            <ul className={s.moviesList}>
              {movies.map(({ title, id }) => (
                <NavLink
                  key={id}
                  className={s.moviesLink}
                  to={{
                    pathname: `${url}/${id}`,
                    state: {
                      from: location.pathname,
                    },
                  }}
                >
                  <li key={id} className={s.moviesItem}>
                    {title}
                  </li>
                </NavLink>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
}
