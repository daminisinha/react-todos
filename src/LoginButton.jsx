import React from 'react';
import LoginCredentials from './LoginCredentials.jsx';

const styles = {
  width:'450px',
    height:'900px',
    top: '10%',
  position:'relative'
  };


export  default class LoginButton extends React.Component{

  render(){
    return(
      <div>
      <input type='button' className="btn btn-success btn-lg" value="Login" data-toggle="modal" data-target="#myModal"/>
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog" style={styles}>
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title">Sign in to SmartAudit</h4>
            </div>
            <div className="modal-body text-center" >
            <label>Enter your email and password </label><br/>
             <input type="text" id="email" className="form-control input-lg"  placeholder="Email" />
            <input type="password" className="form-control input-lg" placeholder="Password"/><br/>
            <button type="button" className="btn btn-success btn-lg btn-block" >Login</button>
            </div>
            <div className="modal-footer">

            </div>
          </div>

        </div>
      </div>
      </div>
    )
  }
}
