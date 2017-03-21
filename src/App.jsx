import React from 'react';
import ReactDom from 'react-dom';
import Input from './Input.jsx';
export default class App extends React.Component{

  render(){
    return(
<div>
<Input />
</div>
    )
  }
}

ReactDom.render(<App />,document.getElementById('app'));
