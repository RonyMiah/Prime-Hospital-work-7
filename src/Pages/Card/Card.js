import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({user}) => {
    const {id,name ,img,skils,phone} = user;
    return (
        <div className="card-design">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h2>{skils}</h2>
           <Link to={`/viewCard/${id}`}> <button className="btn btn-warning">View Detils</button></Link>
        </div>
    );
};

export default Card;