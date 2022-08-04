import React, { useState } from "react";

const AddUsers = () => {
  const [user, setUser] = useState({
    userEmail: "",
    userPassword:""
  });

  const [error, setError] = useState({
    userEmailError: null,
    userPasswordError: null,

  });
  // const emailRegex=
  // /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  // const passRegex=
  // /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,})$/;



  const handleInputChange = (evt) => {
    const regex= 
    new RegExp(
      '^[a-zA-z0-9._:$!%-]+@[a-zA-z]$'

      );
    if (evt.target.name == "userEmail") {
      
        setUser({
          ...user,
          userEmail: evt.target.value,
        });
      

      setError({
        ...error,
        userEmailError:
        regex.test(evt.target.value)?"":"not Valid Email",
         
      });
    } else if (evt.target.name == "userPassword") {
      setUser({
        ...user,
        userPassword: evt.target.value,
      });

      setError({
        ...error,
        userPasswordError:
        (evt.target.value.length <8)?"not Valid password":"",

      });
    }
  };

const handleSubmit=(e)=>{

  e.preventDefault();

}

  return (
    <>

    <form onSubmit={(e)=>handleSubmit(e)}>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Email Address
        </label>
        <input
          type="text"
          className={`form-control   ${
            error.userEmailError ? "border-danger shadow-none " : ""
          }`}
          // className="form-control"
          name="userEmail"
          placeholder="Example input placeholder"
          value={user.userEmail}
          onChange={(e) => handleInputChange(e)}
        />
        <small className="text-danger">{error.userEmailError}</small>
      </div>

      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Another input placeholder"
          value={user.Password}
          name="userPassword"
          onChange={(e) => handleInputChange(e)}
        />
        <small className="text-danger">{error.userPasswordError}</small>

      </div>
   
   <button className="btn btn-primary" type="submit">Login</button>

      </form>
    </>
  );
};

export default AddUsers;
