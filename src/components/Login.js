import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import './style.css'
import SignUp from './SignUp';
// import SignUp from './SignUp';


function Login(props) {

    const [userData, setuserData] = useState({
      email:'',
      password:'' 
})
console.log(userData);

const [emailError, setemailError] = useState("")
const validateEmail=()=>{

    if(userData.email){
        let regex = /^\S+@\S+$/;
        if(regex.test(userData.email)){
            setemailError("");
            return true;
        }
        else{
            setemailError("enter valid email-Id");
        }}
        else{
            setemailError("enter email-ID");
        }
        return false; 
};

const [pwdError, setpwdError] = useState("")
const validatePwd=()=>{
    if(userData.password){
        let regex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{5,}$/;
        if(regex.test(userData.password)){
            setpwdError("");
            return true;
        }
        else{
            setpwdError("enter valid password");
        }}
        else{
            setpwdError("enter password");
        }
        return false; 
};


let updateUserData=(event)=>{
    // event.preventDefault();
    setuserData({
        ...userData,
        [event.target.name]:event.target.value,
    })
}


let saveData=(event)=>{
  
    validateEmail();
    
    validatePwd();
    if(validateEmail() && validatePwd()){
       props.getUserData(userData)
        // event.preventDefault();
        //clearing the form
        setuserData({
            email:'',
            password:''
        });
    }
   
};




   let navigateToSignup=()=>{
    // console.log(props);
    props.history.push('/signup')
   }

    return (
        <div>
        
           
            <h1>Login</h1>
            <div className='container'>
            <div className="mb-3">
                    <input
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    value={userData.email}
                    onChange={(event)=>{updateUserData(event)}}
                    />
                {emailError&&<div className="errMsg">{emailError}</div>}
                </div>
                <div className="mb-3">
                    <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={userData.password}
                    onChange={(event)=>{updateUserData(event)}}
                    />
                {pwdError&&<div className="errMsg">{pwdError}</div>}
                </div>
                <button type="submit" className="btn btn-primary" onClick={saveData}>Login</button>
            </div>
            <h4 style={{cursor:'pointer'}} onClick={navigateToSignup}>Don't have an account? Signup here !</h4>
        </div>
    )
}

export default withRouter(Login) 
