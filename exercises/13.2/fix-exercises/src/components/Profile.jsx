import React, { Component } from 'react'

export class Profile extends Component {
    render() {
        const { ship } = this.props.match.params
        return (
                <p>{this.props.name} {ship}</p>
        )
    }
}

export default Profile
