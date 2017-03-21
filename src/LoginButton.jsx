import React from 'react';
import LoginCredentials from './LoginCredentials.jsx';

export  default class LoginButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {showComponent:false};
      this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent(){
      this.setState({showComponent:true});
  }
  render(){
    return(
      <div>
      <input type='button' value="Login" onClick={this.handleEvent}/>
      {this.state.showComponent?<LoginCredentials />:null}
      </div>
    )
  }
}
