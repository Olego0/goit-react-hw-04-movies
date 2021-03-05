import React, { Component } from "react";
import fetch from "../utils/fetchAPI";

export default class Cast extends Component {
  state = {
    cast: null,
  };
  componentDidMount() {
    fetch.fetchCast(this.props.match.params.movieId).then((cast) => {
      this.setState({ cast });
    });
  }
  render() {
    const { cast } = this.state;
    return (
      <ul className="cast-list">
        {cast &&
          cast.cast.map((actor) => (
            <li className="cast-actor" key={actor.id}>
              <img
                className="actor-profile"
                src={
                  actor.profile_path
                    ? "https://image.tmdb.org/t/p/w200/" + actor.profile_path
                    : "https://img.favpng.com/12/15/11/red-x-background-png-favpng-PPDA8mwEJYirnrSQKqfztJYuc.jpg"
                }
                alt="actor"
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character.replace("(voice)", "")}</p>
            </li>
          ))}
      </ul>
    );
  }
}
