import React from "react";
import { Link } from "react-router-dom";

const Card = ({ shows }) => {
  return (
    <div>
      {shows.map((show) => (
        <div key={show.show.id} className="show">
          <div>
            <h2>{show.show.name}</h2>
            <img src={show.show.image?.medium} alt="show_picture" />
            <p>{show.show.rating?.average}</p>
            <Link to={`/show/${show.show.id}`}>show summary</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
