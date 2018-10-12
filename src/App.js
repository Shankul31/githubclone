import React, { Component } from 'react';
import './App.css';
import User from './components/User';

class App extends Component {
 
 state = {
   user: {}
  }
  
 getUser = () => {
    const name = this.refs.name.value;
    //alert(name)
    fetch (`http://api.github.com/users/${name}`)
    .then (res =>res.json())
    .then(data=>{
      this.setState ({
        user:{
          name: data.name,
          location: data.location,
          follower: data.followers,
          image: data.avatar_url
        }
      })
    })
  }

  render() {
    const {user} = this.state;
    return (
      <div className="App">
        <input type = "text" placeholder = "Enter username" ref="name"/>
        <button onClick = {this.getUser}>Search User</button> 
        <User user = {user}/>
      </div>
    );
  }
}

export default App;
