import React from 'react';

export default class Search extends React.Component{
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.state={checkboxChecked:false}
    this.state={query:''}
  }
  handleChange(e){
    // e is the event. to capture the text from text box we will use e.target.value. this will give us
    // the text.
    this.setState({query:e.target.value})
    this.props.filter(e.target.value,this.state.checkboxChecked);


  }
handleCheck(e){

this.setState({checkboxChecked:e.target.checked})
// this.props.stock(e.target.checked);

this.props.filter(this.state.query,e.target.checked);


}
  render(){
    return(
      <div>
      <input type="textbox" onKeyUp={this.handleChange} id="myInput" placeholder='Search...'/><br/>
      <input type="checkbox" onChange={this.handleCheck} value="stocked"/>Only show products in stocks
      </div>
    )
  }
}
