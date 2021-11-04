import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class About extends Component {
    render() {
        return (
            <div>
            <p>Testando o About!</p>
            <Link to="/">Voltar a home!</Link>
            </div>
        )
    }
}

export default About
