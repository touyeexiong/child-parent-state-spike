import React, { Component } from 'react'
import './App.css';

class App extends Component {
  state = {
    first_name: '',
    last_name: '',
    email_address: '',
    age: '',
    zip: ''    
  }
  
  render() {
    return (
      <>
      <h1>
        Test Form Parent
      </h1>
      <form>
        <label>
          <p>Name</p>
          <input name="name"/>
        </label>
      </form>
      </>
    )
  }
}
export default App;
