import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export class Home extends Component {
    render() {
        return (
            <div>
                <Link to="/about">About</Link>
                <h2>Minha Pagina!</h2>
            </div>
        )
    }
}

export default Home
