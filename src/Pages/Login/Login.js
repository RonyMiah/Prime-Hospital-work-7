import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css';

import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';


    

const Login = () => {

    const {signInUsingGoogle, setUser, setIsLoading,handleUserLogin,  error, setError}=useAuth();

    
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home"

    const handleSignInGoogle = () => {
        setIsLoading(true)
        setError('')
        signInUsingGoogle()
        .then((result)=>{
            setUser(result.user)
            history.push(redirect_url);

        }).catch((err)=>{
            setError(err.message)
            alert(err.message)
        })
        .finally(()=>setIsLoading(false));
    }

    // Handle User Login With Email And Password:
    const handleLogin = (e) => {
        setError('')
        e.preventDefault();
        handleUserLogin()
        history.push(redirect_url);
}

    return (
        <div>
            <form>
           <div className="login-block">
           <h1>Login</h1>
           <input  type="email"  placeholder="Email" id="username" />
           <input  type="password"  placeholder="Password" id="password" />
           <button onClick={handleLogin}>Log In</button>
           <br /><br />
           <input onClick={handleSignInGoogle} className="btn btn-warning text" type="button" value=" Log In  With  Google " />
           {
               error ? <p className="text-danger">{error}</p> : ''
           }
            </div>
            <br />
            <br />
            <p>if you are new Please<Link to="/register"> Register</Link></p>
            </form>
            
        </div>
    );
};

export default Login;