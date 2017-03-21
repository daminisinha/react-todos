import React from 'react';
import Output from './Output.jsx';
export default class Operation extends React.Component{
constructor(props){
  super(props)
  this.operationFunction = this.operationFunction.bind(this);
  this.state = {resultOuput:null}
}
operationFunction(e){
  var result = null;
  if(isNaN(this.props.first) && isNaN(this.props.second)){
    this.setState({resultOuput:null})
  }
  else{
  var firstNum = this.props.first;
  var secondNum = this.props.second;
  if(e.target.value == "add"){
  result=  +firstNum + +secondNum
  }
else if(e.target.value == "mul"){
  result=  +firstNum * +secondNum;
  }
  console.log("Operation :",e.target.value);
  console.log("Operation :",this.props.first);
  console.log("Operation :",this.props.second);
  console.log("Result :",result);
  this.setState({resultOuput:result})
}
}
  render(){
    return(
      <div>
      <label>Select Operation</label><br/>
      <input type="radio" name="operation" value="add" onChange={this.operationFunction}/>
        <label>Add</label><br/>
        <input type="radio" name="operation" value="mul" onChange={this.operationFunction}/>
          <label>Multiply</label><br/>
          <Output result={this.state.resultOuput} />
      </div>
    )
  }
}
