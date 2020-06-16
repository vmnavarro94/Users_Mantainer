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

  addNewUser = user => {
    axios.post('https://jsonplaceholder.typicode.com/users', user)
      .then(({ data }) => {
        const newData = this.state.data.concat(data)
        this.setState({
          data: newData,
          rute: 'list',
        })
      })
  }

  newUser = () => {
    this.setState({ rute: 'form' })
  }

  constructor() {
    super()
    this.state = {
      data: [],
      rute: 'list' //form | list
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
        {rute === 'form' && <UserForm handleSubmit={this.addNewUser}/>}
      </div>
    )
  }
}

export default App
