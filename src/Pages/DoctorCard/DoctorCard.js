import React from 'react';

const DoctorCard = ({user}) => {

    const {name, work, img,about} = user;

    return (
      <div>
         
            <div className="col">
    <div className=" doctorcard card h-100 d-flex flex-column justify-content-center align-items-center ">
      <img src={img} className="card-img-top " alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{about}</p>
        <p className="card-text">{work}</p>
      </div>
    </div>
  </div>
      </div>
    );
};

export default DoctorCard;