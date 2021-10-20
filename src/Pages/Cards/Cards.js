import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.css'



const Cards = () => {
    const [ users , setUsers]=useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data => setUsers(data))
    } ,[])

    console.log(users.length)
    return (
        <div className="card">
            {
               users.map(user=> <Card key={user.id} user={user}></Card>)
            }
        </div>
    );
};

export default Cards;