import React from 'react';
import logo from './logo.svg';

import ViewList from './Components/ViewList';
import UserForm from './Components/UserForm';

import './App.css';

class App extends Component {
  state = {
    rute: 'list' //form
  }

  render() {
    return (
      <div className="App">
        <ViewList />
        <UserForm />
      </div>
    );
  }
}

export default App;
