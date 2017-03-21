import React from 'react';

 export default class LoginCredentials extends React.Component{
   render(){
     return(

       <table>
       <tbody>
       <tr>
       <td>
       <label>Sign in to SmartAudit</label>
       </td>
       </tr>
       <tr>
       <td>
        <label>Enter your email and password</label>
        </td>
        </tr>
        <tr>
        <td>
        <input type="text" placeholder="Email"/>
        </td>
        </tr>
        <tr>
        <td>
        <input type="text" placeholder="Password"/>
        </td>
        </tr>
        <tr>
        <td>
          <input type="button" value="Login"/>
          </td>
          </tr>
               </tbody>
       </table>


     )
   }
 }
