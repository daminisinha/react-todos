import React from 'react.jsx';
import LoginCredentials from './src/LoginCredentials.jsx';

export  default class LoginButton extends React.Component{
  constructor(props){
    super(props)
      this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent(){
      window.open(<LoginCredentials />);
  }
  render(){
    return(
      <div>
      <input type='text' onClick={this.handleEvent}/>
      </div>
    )
  }
}
