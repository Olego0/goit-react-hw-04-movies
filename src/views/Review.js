import React, { Component } from "react";
import fetch from "../utils/fetchAPI";
export default class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    fetch
      .fetchReviews(this.props.match.params.movieId)
      .then((data) => this.setState({ reviews: data.results }));
  }
  render() {
    const { reviews } = this.state;
    return (
      <ul className="reviews-menu">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews now.</p>
        )}
      </ul>
    );
  }
}
