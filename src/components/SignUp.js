import React from 'react'
import { useState } from "react";
import { withRouter } from 'react-router-dom'
import './style.css'

function SignUp(props) {
    const [userData, setuserData] = useState({
        email:'',
        Name:'',
        password:'',
        confirmPassword:''
})
console.log('singupdata',userData);
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

const [nameError, setnameError] = useState("")
const validateName=()=>{
    if(userData.Name){
        let regex =/^[a-zA-Z ]{2,30}$/;
        if(regex.test(userData.Name)){
            setnameError("");
            return true;
        }
        else{
            setnameError("enter valid name");
        }}
        else{
            setnameError("enter name");
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

const [cpwdError, setcpwdError] = useState("")
const validateConfirmPwd=()=>{
    if(userData.confirmPassword)
    {
        if(userData.confirmPassword===userData.password)
        {
            setcpwdError("");
            return true
        }
        else{
            setcpwdError("password and confirm password does not match")
        }
    }else{
        setcpwdError("please enter confirm password");
    }return false
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
    validateName();
    validatePwd();
    validateConfirmPwd();
    if(validateEmail()&& validateName() && validatePwd() && validateConfirmPwd()){
       
        // event.preventDefault();
        //clearing the form
        setuserData({
            email:'',
            Name:'',
            password:'',
            confirmPassword:''
        });
    }
   
};

let handleSubmit=(event)=>{
    event.preventDefault();
}
    let navigateToLogin=()=>{
        // console.log(props);
        props.history.push('/login')
       }
    return (
        <div>
            <h1>Signup </h1>
            <form onSubmit={handleSubmit}>
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
                    name="Name"
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    value={userData.Name}
                    onChange={(event)=>{updateUserData(event)}}
                    />
                {nameError&&<div className="errMsg">{nameError}</div>}
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
                <div className="mb-3">
                    <input
                    name="confirmPassword"
                    type="password"
                    className="form-control"
                    placeholder="Enter confirm Password"
                    value={userData.confirmPassword}
                    onChange={(event)=>{updateUserData(event)}}
                    />
                {cpwdError&&<div className="errMsg">{cpwdError}</div>}
                </div>
                <button type="submit" className="btn btn-primary" onClick={saveData}>SignUp</button>
            </div>
            <h4 style={{cursor:'pointer'}} onClick={navigateToLogin}>Already have an account? Login here !</h4>
        </form>
        </div>
    )
}

export default withRouter(SignUp) 
