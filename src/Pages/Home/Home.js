import React from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import './Home.css'



const Home = () => {

   


    return (
        <div>
            <Banner></Banner>
           <h2 className="fs-1 fw-bolder"> We Are Hospital </h2>
           <hr />
            <br />
            <br />
           <Cards></Cards>
           


           
        </div>
    );
};

export default Home;