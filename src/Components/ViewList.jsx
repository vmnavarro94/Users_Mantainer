import React, { Component } from 'react'

import Header from './Header'
import List from './List'

class ViewList extends Component {
    render() {
        const { data, handleClick, newUser } = this.props
        return (
            <div>
                <Header newUser={ newUser }/>
                <List data={ data } handleClick={ handleClick }/>
            </div>
        )
    }
}

export default ViewList