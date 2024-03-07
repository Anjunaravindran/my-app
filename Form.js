import React from "react";
import { useState } from "react";
import './Style.css'

function Form()
{
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [errors,setErrors] = useState([])
    const handleSubmit = (event)=>{
        event.preventDefault();
        const errors= Validate();
        setErrors(errors);
        
    }

    const Validate=()=>{
        const error={};
        if(!email)
        {
            error.email="Email is Required";
        }
        else if(!/\S+@\S+\.\S+/.test(email))
        {
            error.email="Email is Not Valid";
        }
        else{
            error.email=" ";
        }


        if(!password)
        {
            error.password="Password is Required";
        }
        else if(password.length<8)
        {
            error.password="Password is Not Valid";
        }
        else{
            error.password=" ";
        }
        
        
        return error;
        
    }

    return(
        <div className="container">

            <div className="form_container">
                <form onSubmit={handleSubmit}>
                <h2>Login Form</h2>
                    <div className="form_group">
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
                        {errors.email&&<div className="error">{errors.email}</div>}
                    </div>

                    <div className="form_group">
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} />
                        {errors.password&&<div className="error">{errors.password}</div>}
                    </div>
                    <br/>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
                <a href="#">Sign Up</a>
            </div>
        </div>

    )
}

export default Form;