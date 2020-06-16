import React, { Component } from 'react'

class List extends Component {
    handleClick = id => e => {
        const { handleClick } = this.props
        handleClick(id)
    }

    render() {
        const { data } = this.props
        return (
            <ul>
                {data.map(user => <li key={user.id}>{user.name} <button onClick={this.handleClick(user.id)}>Edit</button></li>)}
            </ul>
        )
    }
}

export default List