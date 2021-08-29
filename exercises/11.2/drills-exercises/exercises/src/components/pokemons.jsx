import React, { Component } from 'react'
import '../App.css'

export class Pokemon extends Component {
  render() {

    const { pk } = this.props;

    return (
      <div className="Pokemons">
        <h3>{pk.name}</h3>
        <p>{pk.type}</p>
        <p>{pk.averageWeight.value}{pk.averageWeight.measurementUnit}</p>
        <img src={pk.image} alt={pk.name} />
      </div>
    )
  }
}

export default Pokemon;
