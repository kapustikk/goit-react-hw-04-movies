import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import moviesAPI from '../services/api';
import s from '../Reviews/Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    moviesAPI.fetchReviewsMovie(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ul className={s.item}>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2 className={s.author}>{author}</h2>
              <span>{content}</span>
            </li>
          ))}
        </ul>
      ) : (
        <span>No reviews for this movie.</span>
      )}
    </>
  );
}
