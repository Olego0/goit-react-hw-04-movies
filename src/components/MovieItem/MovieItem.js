import React from "react";
import styles from "./MovieItem.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function MovieItem({ goBack, match, movie }) {
  return (
    <div>
      <button onClick={goBack} className={styles.backButton}>
        Back
      </button>
      <div className={styles.wrapper}>
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
          alt="movie"
          className={styles.previewPicture}
        />
        <div className={styles.info}>
          <h2>
            {movie.title || movie.name}({movie.release_date.substr(0, 4)})
          </h2>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <div className={styles.genres}>
            {movie.genres.map((el) => (
              <p key={el.id}>{el.name}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.addition}>
        <h3>Additional information</h3>
        <ul className={styles.linkList}>
          <li>
            <Link to={`${match.url}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${match.url}/review`}>Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
MovieItem.propTypes = {
  goBack: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
};
