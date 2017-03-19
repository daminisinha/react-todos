import React from 'react';

export default class Items extends React.Component{
  render(){
    var style1={
      color:'red'
    }
    // var name = this.props.stock ?  this.props.itemName :
    // <span style={{color:red}}>
    // {this.props.itemName}
    // </span>
    return(

        <tr>
      <td style={this.props.units>0?null:style1}>{this.props.itemName}</td>
      <td>{this.props.price}</td>
      <td>{this.props.units}</td>
      </tr>
      )
  }


}
