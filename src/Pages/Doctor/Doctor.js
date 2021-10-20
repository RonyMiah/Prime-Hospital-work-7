import React, { useEffect, useState } from 'react';
import './Doctor.css'

const Doctor = () => {
    const [users,setUsers]=useState([]);

    useEffect( ()=>{
        fetch('./doctor.json')
        .then(res=> res.json())
        .then(data => setUsers(data))
    } ,[])


     


    return (
        <div className="">
            {
               users.map(user=> 
                <h1>{user.name}</h1>
               )
                
            }
            
        </div>
    );
};

export default Doctor;