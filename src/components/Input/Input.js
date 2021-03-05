import React, { Component } from "react";
import styles from "./Input.module.css";
import PropTypes from "prop-types";
export default class Input extends Component {
  static propTypes = {
    submit: PropTypes.func.isRequired,
  };
  state = {
    value: "",
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submit(this.state.value);
    this.setState({
      value: "",
    });
  };
  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          placeholder="Enter film"
          value={value}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
