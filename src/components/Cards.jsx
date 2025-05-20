import React from "react";

export default function Cards() {
  return (
    <>
      <div className="card">
        <img
          className="card__image"
          src="https://m.media-amazon.com/images/I/819EsCLfwvL._AC_UY218_.jpg"
        />
        <div className="card__content">
          <h2 className="card__title"></h2>
          <p className="card__description"></p>
        </div>

        <div className="card">
          <img
            className="card__image"
            src="https://m.media-amazon.com/images/I/515K21J7NZL._AC_UY218_.jpg"
          />
          <div className="card__content">
            <h2 className="card__title"></h2>
            <p className="card__description"></p>
          </div>
        </div>

        <div className="card">
          <img
            className="card__image"
            src="https://m.media-amazon.com/images/I/51-QcnpZvfL._SX300_SY300_QL70_FMwebp_.jpg"
          />
          <div className="card__content">
            <h2 className="card__title"></h2>
            <p className="card__description"></p>
          </div>
        </div>
      </div>
    </>
  );
}
