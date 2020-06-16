import React, { Component } from 'react'
import axios from 'axios'

import ViewList from './Components/ViewList'
import UserForm from './Components/UserForm'

import './App.css'

class App extends Component {

  selectUser = id => {
    this.setState({
      rute: 'form',
      selectedUser: id
    })
  }

  newUser = () => {
    this.setState({ rute: 'form' })
  }

  constructor() {
    super()
    this.state = {
      data: [],
      rute: 'form' //form | list
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => this.setState({ data }))
  }

  render() {
    const { rute, data } = this.state
    return (
      <div className="App">
        {rute === 'list' && <ViewList 
          newUser={this.newUser}
          data={ data } 
          handleClick={ this.selectUser }/>}
        {rute === 'form' && <UserForm />}
      </div>
    )
  }
}

export default App
