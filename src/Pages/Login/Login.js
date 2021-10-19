import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


    

const Login = () => {

    const {signInUsingGoogle}=useAuth();




    const emailPassAuth = getAuth();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    // Validation For Email and password 

// const handleEmail =e =>{
//     setEmail(e.target.value);
// }
// const handlePassword =e =>{
//     setPassword(e.target.value);
// }

//     const handleRegistration =(e)=>{
//         signInWithEmailAndPassword(emailPassAuth, email, password)
//         .then(result =>{
//             const user= result.user;
//             console.log(user);
//         })
//         e.preventDefault();

//     }


    return (
        <div>
            <form onSubmit=''>
           <div className="login-block">
           <h1>Login</h1>
           <input onBlur='' type="email"  placeholder="Email" id="username" />
           <input onBlur='' type="password"  placeholder="Password" id="password" />
           <button>Log In</button>
           <br /><br />
           <input onClick={signInUsingGoogle} className="btn btn-warning text" type="button" value=" Log In  With  Google " />
            </div>
            <br />
            <br />
            <p>if you are new <a href="/register">Please Register</a></p>
            </form>
            
        </div>
    );
};

export default Login;