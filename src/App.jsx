import React from 'react';
import ReactDom from 'react-dom';
import Search from './Search.jsx';
import CategoryContainer from './CategoryContainer.jsx';

// stocked: true
const data = [
  {category: "Sporting Goods", price: "$49.99", name: "Football",units:"20"},
  {category: "Sporting Goods", price: "$9.99",  name: "Baseball",units:"10"},
  {category: "Sporting Goods", price: "$29.99", name: "Basketball",units:"0"},
  {category: "Electronics", price: "$99.99",  name: "iPod Touch",units:"3"},
  {category: "Electronics", price: "$399.99",  name: "iPhone 5",units:"0"},
  {category: "Electronics", price: "$199.99",  name: "Nexus 7",units:"10"}
];
export default class App extends React.Component{
constructor(props){
  super(props);
  this.state = {filterData:data}

  //this.state = {inStockData:data}
}
filterFunction(query,checked){
    var temp =null;
    console.log("Query is: ",query);
    console.log("Checked is: ",checked);
    temp = data.filter(function(object){
      if(checked)
      return object.name.toLowerCase().indexOf(query.toLowerCase()) > -1 && object.units > 0;
      else {
        return object.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
      }

    })


    this.setState({filterData:temp});
    console.log("Filter data is: ",this.state.filterData)

    }
filterInStockFunction(checked){
  var inStock = null;
  var self = this;
  if(checked)
  {
  inStock = data.filter(function(entireOject){

     return  entireOject.units >0;

  })
  self.setState({filterData:inStock});
}
else{
  self.setState({filterData:data});
}



}
  render(){

    return(
      <div>
      <Search filter={this.filterFunction.bind(this)} stock={this.filterInStockFunction.bind(this)}/>
      <CategoryContainer category = {this.state.filterData}/>

      </div>
    )
  }
}

ReactDom.render(<App />,document.getElementById('app'));
