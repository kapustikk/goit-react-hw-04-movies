import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesAPI from '../services/api';
import errorImage from '../noImage.jpg';

import s from '../Cast/Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const srcUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    moviesAPI.fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <>
          <ul className={s.list}>
            {cast.map(({ id, profile_path, name, character }) => (
              <li key={id} className={s.item}>
                <img
                  src={profile_path ? `${srcUrl}${profile_path}` : errorImage}
                  alt=""
                  width="120"
                  height="180"
                />
                <h3>{name}</h3>
                <span className={s.character}>Character: {character}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
