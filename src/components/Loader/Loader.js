import React from "react";
import Spinner from "react-loader-spinner";
export default function Loader() {
  return (
    <Spinner
      className="Loader"
      type="Circles"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
