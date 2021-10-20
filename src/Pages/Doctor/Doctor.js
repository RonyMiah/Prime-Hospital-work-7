import React, { useEffect, useState } from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';
import './Doctor.css'

const Doctor = () => {
    const [users,setUsers]=useState([]);

    useEffect( ()=>{
        fetch('./doctor.json')
        .then(res=> res.json())
        .then(data => setUsers(data))
    } ,[])


     


    return (
       <div>
            <h2 className="fs-1" >Our Doctors</h2>
            <hr />
        <div className="row row-cols-1 p-5 row-cols-md-3 g-4 container mx-auto">
            {
               users.map(user=> 
                <DoctorCard user={user} key={user.id}></DoctorCard>
               )
                
            }
            
        </div>
       </div>
    );
};

export default Doctor;