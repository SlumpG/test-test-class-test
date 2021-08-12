import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <div className="body">
            <div className="container">
   <div id="signup">
      <div className="signup-screen">
         <div className="space-bot text-center">
            <h1>Sign up</h1>
           <div className="divider"></div>
         </div>
           <form className="form-register" method="post" name="register" novalidate>
	            <div className="input-field col s6">
              <input id="first-name" type="text" className="validate" require/>
              <label for="first-name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last-name" type="text" className="validate" required/>
              <label for="last-name">Last Name</label>
             </div>
             <div className="input-field col s6">
              <input id="email" type="email" name="email" ng-model="email" className="validate" required/>
              <label for="email">Email</label>
             </div>
             <div className="input-field col s6">
               <input id="password" type="password" name="password" ng-model="password" ng-minlength='6' className="validate" required/>
               <label for="password">Password</label>
              </div>
              <div className="space-top text-center">
               <button ng-disabled="form-register.$invalid" className="waves-effect waves-light btn done">
               <i className="material-icons left">done</i> Done
               </button>
               <button type="button" className="waves-effect waves-light btn cancel">
               <i className="material-icons left">clear</i>Cancel
               </button>
              </div>
             </form>
           </div>
        </div>
    </div>
        </div>
    )
}

export default Form
