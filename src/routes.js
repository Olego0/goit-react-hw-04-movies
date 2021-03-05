import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() =>
      import("./views/HomePage" /*webpackChunkName: "home-page" */)
    ),
  },
  {
    path: "/movies",
    label: "Movies",
    exact: true,
    component: lazy(() =>
      import("./views/MoviesPage" /*webpackChunkName: "movies-page" */)
    ),
  },
  {
    path: "/movies/:movieId",
    label: "movieDetails",
    exact: false,
    component: lazy(() =>
      import(
        "./views/MovieDetails" /*webpackChunkName: "movieDetails-page" */
      )
    ),
  },
];
