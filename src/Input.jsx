import React from 'react';
import Operation from './Operation.jsx';

var errorStyle = {color:'red'}
export default class Input extends React.Component{
constructor(props){
  super(props)
  this.validateFunction = this.validateFunction.bind(this);
  this.state={firstNum:null}
  this.state= {secondNum :null,errorInput:false}

}

validateFunction(e){
  var self = this;
  self.setState({errorInput:false})
  if([/d/].match(e.target.value0) || e.target.value=='' ||e.target.value==null){
    self.setState({errorInput:true})

}
else{
  switch(e.target.id){
    case 'first': self.setState({firstNum:e.target.value});
                 break;
    case 'second':self.setState({secondNum:e.target.value});
                 break;
    default: break;
  }

}
// this.setState({firstNum : document.getElementById('first').value});
//    this.setState({secondNum :document.getElementById('second').value});
 }

  render(){
    var isError = this.state.errorInput;
    console.log(isError);
    return(
      <div>

      <div>
      {isError?
      <div style={errorStyle}>Please enter valid input(s)</div>:null}
      <input type="text" id="first" onKeyUp={this.validateFunction} placeholder="Enter first number here.."/>

      <br/>
      <input type="text" id="second" onKeyUp={this.validateFunction} placeholder="Enter second number here"/>
      {!isError?
      <Operation first={this.state.firstNum} second ={this.state.secondNum} />:null
      }
      </div>

    </div>
    )
  }
}
