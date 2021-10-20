import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './ViewCard.css'

const ViewCard = () => {
    const history= useHistory();
    const { cardId }= useParams();
    const [ users , setUsers]=useState([]);
    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data => setUsers(data))
    } ,[])

    const filteredData = users.filter((use) =>{
        return use.id.toString() === cardId.toString()
    })

    console.log(filteredData[0])

    const handelGoBack=()=>{
        history.push('/home')


    }
    
    return (
        <div className="viewCard">
            <img src={filteredData[0]?.img} alt="" className="w-25"/>
            <h2>Name: {filteredData[0]?.name} </h2>
            <p className="w-50 mx-auto">{filteredData[0]?.about}</p>
            <button onClick={handelGoBack} className="btn btn-warning">Go Back</button>
        </div>
    );
};

export default ViewCard;