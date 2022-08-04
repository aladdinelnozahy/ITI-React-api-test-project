import React, { useState } from "react";
import AddUsers from "./addUsers";


const AddForm=()=>{
    const [user,AddUsers]= useState({
        userEmail:"",
        userPassword:"",
        confirmPassword:"",
        userName:"",
    })
    const [err,AddError]= useState({
        errorEmail:null,
        errorPassword:null,
        errorPassword:null,
        errorName:null,
        errorConfirmation: null
    })
    const inputChange=(e)=>{
        const regex= new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        const passRegex= new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$');
        const userRegex= new RegExp('^\\s*$');
        if (e.target.name ==="email"){
            AddUsers({
                ...user,
                userEmail:e.target.value
            })
            AddError({
                ...err,
                errorEmail:(regex.test(e.target.value))?"":"invalid email"
            })
        }     
        else if (e.target.name ==="password"){
            AddUsers({
                ...user,
                userPassword:e.target.value
            })
            AddError({
                ...err,
                errorPassword:(passRegex.test(e.target.value))?"":"invalid password"
            })
        }   
        else if (e.target.name ==="confirmation"){
            AddUsers({
                ...user,
                confirmPassword:e.target.value
            })
            AddError({
                ...err,
                errorConfirmation:(e.target.value == user.userPassword)?"":"not match the password"
            })
        }   
        else if (e.target.name ==="userName"){
            AddUsers({
                ...user,
                userName:e.target.value
            })
            AddError({
                ...err,
                errorName:(userRegex.test(e.target.value))?"":"remove white space and try again "
            })
        }
        
    };

    return(
        <>
            <form >
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Email Address
        </label>
        <input
          type="text"
          className={`form-control   ${
            err.errorEmail? "border-danger shadow-none " : ""
          }`}
          name="email"
          placeholder="Example input placeholder"
          value={user.userEmail}
          onChange={(e) => inputChange(e)}
        />
        <small className="text-danger">{err.errorEmail}</small>
      </div>





      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Another input placeholder"
          value={user.userName}
          name="userName"
          onChange={(e) => inputChange(e)}
        />
                <small className="text-danger">{err.errorName}</small>

      </div>





      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Another input placeholder"
          value={user.userPassword}
          name="password"
          onChange={(e) => inputChange(e)}
        />
                <small className="text-danger">{err.errorPassword}</small>

      </div>


      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Confirm Password:
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Another input placeholder"
          value={user.confirmPassword}
          name="confirmation"
          onChange={(e) => inputChange(e)}
        />
                <small className="text-danger">{err.errorConfirmation}</small>

      </div>


   
   <button className="btn btn-primary" type="submit">Login</button>

      </form>
        </>
    )
}

export default AddForm;
