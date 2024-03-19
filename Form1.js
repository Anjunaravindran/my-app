import React from "react";
import { useState, useEffect } from "react";
import './Style1.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faKey,faEye,faEyeSlash,faSquareCheck } from "@fortawesome/free-solid-svg-icons";


function Forms()
{

    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [errors,setErrors]= useState([])
    const [isLoading,setIsLoading]= useState(false)
    const handleSubmit= (event)=>{
    
        setIsLoading(true)
            event.preventDefault();
            
            setTimeout(()=>{
                setIsLoading(false)
            
            const errors = Validate();
            setErrors(errors);
            
            
        },4000);
        
    }

    

    const Validate = ()=>{
        const error = {};

        if(!email)
        {
            error.email="Email is Required";
        }
        else if(!/\S+@\S+\.\S+/.test(email))
        {
            error.email="Email is not Valid";
        }
        else
        {
            error.email=" ";
        }

        if(!password)
        {
            error.password="Password is Required";
        }
        else if(password.length<8)
        {
            error.password= " Password is not Valid";
        }
        else{
            error.password=" ";
            alert("Successfully Logined");
        }

        return error;
    }
    

    return(
        <div className="container">
                <h1>Login Form</h1>
            <div className="form_container">
                <form onSubmit={handleSubmit}>
                    <div className="form_group1">
                        <input type="text" placeholder="Enter Email Id" onChange={(e)=>(setEmail(e.target.value))}/>
                        <span className="Icons">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        </span>
                        {errors.email&&<div className="error">{errors.email}</div>}
                    </div>

                    <div className="form_group1">
                        <input type="password" placeholder="Enter Password" onChange={(e)=>(setPassword(e.target.value))}/>
                        <span className="Icons">
                            <FontAwesomeIcon icon={faKey}/>
                        </span>
                        {errors.password&&<div className="error">{errors.password}</div>}

                    </div>
                    <div className="form_group2">
                        <span >
                        <FontAwesomeIcon icon={faSquareCheck} />
                        <span>Remember Me</span></span>
                        <button onClick={handleSubmit} disabled={isLoading} >
                            {isLoading?"Login...":" "}
                            Login</button>
                    </div>
                    <div className="form_group2">
                        <a href="#">Register Now</a>
                        <a href="#">Forgot Password</a>
                    </div>
                    
                    
                         <div className="form_group3">
                         <input style={{backgroundColor:"#a9a9a9",fontSize:22,textAlign:"center",cursor:"pointer"}}  type="text" placeholder="Login With Facebook"/>
                         </div>

                         <div className="form_group3">
                         <input style={{backgroundColor:"#48d1cc",fontSize:22,textAlign:"center",cursor:"pointer"}}   type="text" placeholder="Login With Twitter"/>
                         </div>

                         <div className="form_group3" >
                         <input type="text"  style={{backgroundColor:"#ff0000",fontSize:22,textAlign:"center",cursor:"pointer"}}    placeholder="Login With Google"/>
                        </div>
                    
               </form>
            </div>
        </div>
    )
}

export default Forms;