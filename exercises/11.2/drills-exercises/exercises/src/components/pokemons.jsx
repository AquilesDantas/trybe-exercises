import React, { Component } from 'react'
import '../App.css'

export class Pokemon extends Component {
  render() {

    const { pk } = this.props;

    return (
      <div className="pokemon">
        <h3>{pk.name}</h3>
        <p>Tipo: {pk.type}</p>
        <p>Peso: {pk.averageWeight.value}{pk.averageWeight.measurementUnit}</p>
        <img className="imagem" src={pk.image} alt={pk.name} />
      </div>
    )
  }
}

export default Pokemon;
