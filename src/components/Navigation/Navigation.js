import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
export default function Navigation() {
  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        <NavLink
          exact
          to="/"
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Movies
        </NavLink>
      </ul>
    </header>
  );
}
