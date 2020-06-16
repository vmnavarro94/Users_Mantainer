import React, { Component } from 'react'

import ViewList from './Components/ViewList'
import UserForm from './Components/UserForm'

import './App.css'

class App extends Component {
  state = {
    rute: 'list' //form
  }

  render() {
    const { rute } = this.state
    return (
      <div className="App">
        {rute === 'list' && <ViewList />}
        {rute === 'form' && <UserForm />}
      </div>
    )
  }
}

export default App
