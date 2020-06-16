import React, { Component } from 'react'

import Header from './Header'
import List from './List'

class ViewList extends Component {
    render() {
        return (
            <div>
                <Header />
                <List />
            </div>
        )
    }
}

export default ViewList