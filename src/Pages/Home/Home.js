
import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Cards from '../Cards/Cards';
import './Home.css'




const Home = () => {

   


    return (
        <div>
  {/* Banner Section  */}

            <Banner></Banner>
           

     {/* Card Section  */}
     <h2 className="fs-1 fw-bolder"> We Are Hospital </h2>
           <hr />
            <br />
        <Cards></Cards>



           
      {/* Middle Banner  */}
           <div className="middel-banner">
                    <div className="middel-box">
                        <div className="middel-box-text">
                            <img className="box-img" src="https://i.ibb.co/n0nG2Lc/pexels-mikhail-nilov-8942072.jpg"  alt="" />

                        </div>
                        <div className="middel-box-text">
                            <h4> Considering the recent hike of COVID victims in the state, the government in order to handle the scarcity of workers has decided to deploy doctors of medical colleges at </h4>
                        </div>
                    </div>
           </div>




            {/* Blog Section  */}

            







           <h2 className="p-3 fw-bolder ">From The Blog Section</h2>
           <Blog></Blog>
           


           
        </div>
    );
};

export default Home;