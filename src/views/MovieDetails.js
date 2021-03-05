import React, { Component, lazy, Suspense } from "react";
import fetch from "../utils/fetchAPI";
import { Route } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import MovieItem from "../components/MovieItem/MovieItem";
import ReactRouterPropTypes from 'react-router-prop-types';
export default class MovieDetails extends Component {
  state = {
    movie: null,
  };
  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    match: ReactRouterPropTypes.match.isRequired,
  };
  componentDidMount() {
    fetch.fetchMovieWithId(this.props.match.params.movieId).then((movie) => {
      this.setState({
        movie,
      });
    });
  }
  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;
    return (
      <>
        {movie && (
          <>
            <MovieItem match={match} goBack={this.goBack} movie={movie} />
            <Suspense fallback={<Loader />}>
              <Route
                path={`${match.path}/cast`}
                component={lazy(() =>
                  import("./Cast" /*webpackChunkName: "cast" */)
                )}
              />
              <Route
                exact
                path={`${match.path}/review`}
                component={lazy(() =>
                  import("./Review" /*webpackChunkName: "reviews" */)
                )}
              />
            </Suspense>
          </>
        )}
      </>
    );
  }
}
