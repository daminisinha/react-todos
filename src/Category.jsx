import React from 'react';

export default class Category extends React.Component{
  render(){
    return(
      <tr>
      <th>{this.props.showCategory}</th>
      </tr>
    )
    }
  

}
