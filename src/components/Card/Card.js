import React from "react";
import { Link } from "react-router-dom";
import typeColors from "../../helpers/pokemonTypes";
import "./style.css";

function Card({ pokemon }) {
  return (
    <div className="Card">
      <div className="Card__img">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="Card__name">{pokemon.name}</div>
      <Link
        to={{
          pathname: "/pokemon/",
          state: {
            pokemon,
          },
        }}
        className="btn btn-primary"
        exact
      >
        View Data
      </Link>
    </div>
  );
}

export default Card;
