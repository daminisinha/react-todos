import React from 'react';

export default class Output extends React.Component{

  render(){

    return(
      <div>
      <input type="text" value ={this.props.result?"Your result is "+this.props.result:''} readOnly="true" id="output"/>
      </div>
    )
  }
}
