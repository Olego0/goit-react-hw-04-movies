import React from "react";

export default function Layout({ message, children }) {
  return (
    <div>
      <h1>{message}</h1>
      {children}
    </div>
  );
}
