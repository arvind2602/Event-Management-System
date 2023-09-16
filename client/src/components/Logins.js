import React, { useState } from 'react'
import './Logins.css'
import {Link} from 'react-router-dom'

const Logins = () => {
    const [action,setaction] = useState("Login");
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
             </div>
             <div className="inputs">
                {action==="Login"?<div></div>: <div className="input">
                <i class="fa-solid fa-user"></i>
                    <input type="text" placeholder='Name'/>
                </div>}
               
                <div className="input">
                <i class="fa-solid fa-envelope"></i>
                    <input type="email" placeholder='Email Id'/>
                </div>
                <div className="input">
                <i class="fa-solid fa-lock"></i>
                    <input type="password" placeholder='Password'/>
                </div>
             </div>
             {action==="Sign Up"?<div/>:<div className="forgot-password">Forget Password?<span>Click Here</span></div>}
             {
             action==="Login"?<div className="Signuptxt">New here?<span onClick={()=>{setaction("Sign Up")}}>SignUp!</span></div>:<div className="Logintxt">Already a User?<span onClick={()=>{setaction("Login")}}>Login!</span></div>
             }

             <div className="submit-container">
                
             <Link className='linkk' to="/"><div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setaction("Login")}}>Submit</div></Link>

             </div>
        </div>
    )
}

export default Logins