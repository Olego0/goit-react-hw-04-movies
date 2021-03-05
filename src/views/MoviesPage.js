import React, { Component } from "react";
import Input from "../components/Input/Input";
import fetch from "../utils/fetchAPI";
import { Link } from "react-router-dom";
import queryString from "query-string";
import Loader from "../components/Loader/Loader";
import ReactRouterPropTypes from "react-router-prop-types";
export default class MoviesPage extends Component {
  state = {
    articles: [],
    isLoading: false,
  };
  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    location: ReactRouterPropTypes.location.isRequired,
    match: ReactRouterPropTypes.match.isRequired,
  };
  componentDidMount() {
    const getCategoryFromProps = (string) => queryString.parse(string);
    const { query } = getCategoryFromProps(this.props.location.search);

    if (query) {
      this.handleSubmit(query);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const getCategoryFromProps = (string) => queryString.parse(string);
    const { query: prevQuery } = getCategoryFromProps(
      prevProps.location.search
    );
    const { query: nextQuery } = getCategoryFromProps(
      this.props.location.search
    );

    if (prevQuery !== nextQuery) {
      this.handleSubmit(nextQuery);
    }
  }
  handleSubmit = (query) => {
    this.setState({ isLoading: true });
    fetch
      .fetchWithQuery(query)
      .then((data) =>
        this.setState({ articles: data.results, isLoading: false })
      );
  };
  handleFormSubmit = (value) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${value}`,
    });
  };

  render() {
    const { articles, isLoading } = this.state;
    return (
      <>
        {isLoading && <Loader />}
        <Input submit={this.handleFormSubmit} />
        {articles.length > 0 &&
          articles.map((article) => (
            <li key={article.id}>
              <Link
                to={{
                  pathname: `/movies/${article.id}`,
                  state: { from: this.props.location },
                }}
              >
                {article.title}
              </Link>
            </li>
          ))}
      </>
    );
  }
}
