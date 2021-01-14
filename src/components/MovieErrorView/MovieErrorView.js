import PropTypes from 'prop-types';
import errorImage from '../noImage.jpg';

export default function MovieError({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} alt="" />
      <p>Sorry, something wrong:( Error: {message}</p>
    </div>
  );
}

MovieError.propTypes = {
  message: PropTypes.string.isRequired,
};
