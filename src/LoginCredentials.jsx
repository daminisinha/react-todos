import React from 'react.jsx';

 export default class LoginCredentials extends React.Component{
   render(){
     return(
       <div>
       <label>Sign in to SmartAudit</label>
        <label>Enter your email and password</label>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
          <input type="button" value="Login"/>
       </div>
     )
   }
 }
