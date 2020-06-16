import React, { Component } from 'react'

const styles = {
    inline: {
        display: 'inline',
    }
}

class Header extends Component {
    render() {
        const { newUser } = this.props
        return (
            <div>
                <h2 style={styles.inline}>Users</h2>
                <button onClick={newUser} style={styles.inline}>New User</button>
            </div>
        )
    }
}

export default Header