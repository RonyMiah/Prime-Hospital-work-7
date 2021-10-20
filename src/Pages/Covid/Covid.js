import React from 'react';
import './Covid.css';
import ambolance from '../../Images/ambolance.jpg'
const Covid = () => {
    return (
        <div>
             <div className="box">
            <h2 className="box-text"> COVID-19 updates and support</h2>
             </div>

            


             <div className="container-box">
             
                 <div>
                     <img src={ambolance} alt="" />
                 </div>
                 <div className="container-text">
                     <h4>For more than 115 years, we’ve been focused on supporting and adapting to the changing needs of our members. Our commitment to this is as strong as ever</h4>
                     <br />
                     <br />
                     <h4>The essential RAC services you rely on are still running and our team is here for you when you need us.</h4>
                     <button className="btn btn-light">A message from our Group CEO</button>
                 </div>
             </div>
                <h1 className="text-center">Service updatesk </h1>
                <hr />
             <div className="container-card">
                    <div className="container-card-text container">
                        <h2>Financial hardship support</h2>
                        <p>We know this is a difficult time for many of our members and we are committed to supporting you. If you are experiencing financial hardship, please contact us to discuss your options.</p>
                        <h5> 13 17 09</h5>
                        <button className="btn btn-light">Apply Online</button>
                    </div>
                    <div className="container-card-text container">
                        <h2>COVIDSafe app</h2>
                        <p>We are encouraging our members to consider downloading the COVIDSafe app, to help protect our community against COVID-19 and ensure we can get back to normal life as soon as possible.</p>
                        <button className="btn btn-light">Download Now</button>
                    </div>
             </div>
             
        </div>
    );
};

export default Covid;