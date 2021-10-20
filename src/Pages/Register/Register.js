import React from 'react';
import './Register.css'
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';




const Register = () => {

    
    const {signInUsingGoogle, setIsLoading, setError, setUser,  handleName, handleEmail, handlePassword, handleRegistration}= useAuth();

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


    // Create New Account:
    const createNewAccount = (e) => {
        setError('')
        e.preventDefault();
        handleRegistration()
        history.push('/login');
}

    return (
        <div>
             <form>
           <div className="login-block">
           <h1> Registration </h1>
           <input type="text"  placeholder="Name" id="name" onKeyUp={handleName}/>
           <input type="email"  placeholder="Email" id="email" onKeyUp={handleEmail}/>
           <input type="password" placeholder="Password" id="password" onKeyUp={handlePassword}/>
           <button onClick={createNewAccount}>Registration</button>
           <br /><br />
           <input onClick={handleSignInGoogle} className="btn btn-warning   " type="button" value=" Register  With  Google " />
            </div>
            <br />
            <br />
            <p>if you are new Please <Link to="/login">Log In</Link></p>
            </form>
        </div>
    );
};

export default Register;