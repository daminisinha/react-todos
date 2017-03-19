import React from 'react';
import Category from './Category.jsx';
import Items from './Items.jsx';
export default class CategoryContainer extends React.Component{
  render(){
  var tempArray =[];
    var temp = null;
    this.props.category.forEach(
      function(eachObject)
      {
      if(temp!=eachObject.category){
      temp = eachObject.category
      tempArray.push(<Category key={eachObject.category} showCategory={eachObject.category} />)
      }
      tempArray.push(<Items key={eachObject.name} itemName={eachObject.name} price={eachObject.price} units = {eachObject.units} stock={eachObject.stocked}/>)
    }
  )
    return(
      <div>
      <table>
      <tbody>
      <tr><th>Name</th><th>Price</th><th>Units</th></tr>
      {tempArray}
      </tbody>
      </table>
      </div>
      )
  }

}
