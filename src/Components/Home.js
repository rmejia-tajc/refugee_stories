import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

function Home() {

  return (
    <div className="home-wrapper">    

      <section className="banner">

        <div className="content">

          <h1>Refugees</h1>

          <p className="words">
              Doaa is a 19-year-old aspiring student who was forced by the war to live a 
              grinding existence with her family in exile. 
          </p><p className="words">
              Without a work permit in Egypt, I struggled through day shifts for low wages. As the months passed, I was getting more and more scared. One day, a motorcycle gang tried to kidnap me on the street.”
          </p>

          <Link className="primary-button" to="/stories">Read More</Link>

        </div>

        <div className= "img-pic"></div>

      </section>

    </div>
  );
}

export default Home;
