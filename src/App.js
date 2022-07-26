import React from "react";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: values =>{
      console.log('form:', values);
    },
    validate: values => {
      let errors = {};
      //I looked up the email testing method, got it from https://bobbyhadz.com/blog/react-check-if-email-is-valid 
      if(/\S+@\S+\.\S+/.test(values.username) == false) errors.username = "Username should be an email";
      if(!values.username) errors.username = "Field required";
      if(!values.password) errors.password = "Field required";
      return errors;
    }
  });

  function submitTest(){
    if(!formik.errors.username && !formik.errors.password){
      return alert("Login Successful");
    } else {
      return alert("Login Failed, try again");
    }
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Username</div>
        <input name="username" id="emailField" type="text" onChange={formik.handleChange} value={formik.values.username}/>
        {formik.errors.username ? <div id="emailError" style={{color:'red'}}>{formik.errors.username}</div>: null}
        <div>Password</div>
        <input name="password" id="pswField" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div>: null}
        <button id="submitBtn" type="submit" onClick={submitTest}>Submit</button>
      </form>
    </div>
  );
}

export default App;
