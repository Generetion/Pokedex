import React from "react";
import { useLocation } from "react-router";
import typeColors from "../../helpers/pokemonTypes";
import "./style.css";

export default function CardInfo() {
  const location = useLocation();
  const { pokemon } = location.state;
  console.log(pokemon);
  return (
    <div className="Card">
      <div className="Card__img">
        <img src={pokemon.sprites.front_default} alt="" />
        <img src={pokemon.sprites.front_shiny} alt="" />
      </div>
      <div className="Card__name">{pokemon.name}</div>

      <div className="Card__types">
        {pokemon.types.map((type) => {
          return (
            <div
              className="Card__type"
              style={{ backgroundColor: typeColors[type.type.name] }}
            >
              {type.type.name}
            </div>
          );
        })}
      </div>
      <div className="Card__info">
        <hr />
        <h3>Stats:</h3>
        <div className="Card__data Card__data--weight">
          <p className="title">Weight</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="Card__data Card__data--weight">
          <p className="title">Height</p>
          <p>{pokemon.height}</p>
        </div>

        <div className="Card__data Card__data--abilities:">
          <p className="title">Abilites:</p>
          {pokemon.abilities.map((abilities) => {
            return <div>{abilities.ability.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
