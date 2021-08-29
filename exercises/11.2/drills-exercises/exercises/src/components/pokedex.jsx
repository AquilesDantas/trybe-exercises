import React, { Component } from 'react'
import Pokemon from './pokemons';

export class Pokedex extends Component {
  render() {

    const { list } = this.props;

    return (
    list.map((poke) => (
      <div className="pokedex">
        <Pokemon pk={poke}/>
      </div>
    ))
    )
  }
}

export default Pokedex;
