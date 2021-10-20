import React from 'react';
import './Contuct.css';


const Contuct = () => {
    return (
        <div className="countuct">
            <h2 className="text-warning fs-1 fw-bold">Contact us  </h2>
            
            <br />

            <div className="contuct-us"> 
                <div>
                    <b className="fs-1 text-white fw-bloder bg-info p-2"> 24 Hours Services</b>
                    
                </div>
                <br />
                
                  <div className="count-phone">
                      <h1  className="fs-1 text-primary fw-bloder">Phone us </h1>
                      <p><i className="fas fa-phone-volume"></i>+9978494</p>
                      <p><i className="fas fa-phone-volume"></i>+8973834</p>
                      <p><i className="fas fa-phone-volume"></i>+5389399</p>
                      
                  </div>
                  

                
           </div>
           

        </div>
    );
};

export default Contuct;