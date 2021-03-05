import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import fetch from "../utils/fetchAPI";
import { Link } from "react-router-dom";
export default class HomePage extends Component {
  state = {
    articles: [],
  };
  componentDidMount() {
    fetch.fetchTrending().then((response) => {
      this.setState({ articles: response.results });
    });
  }
  render() {
    const { articles } = this.state;
    return (
      <Layout message="Trending today">
        <ul className="trending-menu">
          {articles.map((article) => (
            <li key={article.id}>
              <Link to={`/movies/${article.id}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}
