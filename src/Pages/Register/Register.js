import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div>
             <form action="">
           <div className="login-block">
           <h1> Registration </h1>
           <input type="text"  placeholder="Fast Name" id="username" />
           <input type="text"  placeholder="Last Name" id="username" />
           <input type="email"  placeholder="Email" id="username" />
           <input type="password" placeholder="Password" id="password" />
           <button>Registration</button>
           <br /><br />
           <input className="btn btn-warning   " type="button" value=" Register  With  Google " />
            </div>
            <br />
            <br />
            <p>if you are new <a href="/login">Please Log In</a></p>
            </form>
        </div>
    );
};

export default Register;