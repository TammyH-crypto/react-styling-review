import React from "react";

export default function NavBar() {
  return (
    <header className="nav">
      <h1 className="nav__logo"></h1>
      <nav className="nav__links">
        <a href="/">Movies</a>
        <a href="/">Actors</a>
        <a href="/">Top Three</a>
      </nav>
      <button className="nav__cta">Welcome</button>
    </header>
  );
}
