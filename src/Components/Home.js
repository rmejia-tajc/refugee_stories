import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

function Home() {

  return (
    <div className="home-wrapper">    

      <section className="cta">

        <div className="cta-content">

          <h1>Refugee Stories</h1>

          <p className="words">
            A friends of mine, one fo the first tech CEOs in Afghanistan, in 2014, was needing to pay her employees, young women. But their uncles, brothers and husbands would not let them open bank accounts. The men want to control everything there and paypall was banned and all that. So, she paid them in Bitcoin. They would keep their bitcoins in a hot wallet on their phones and come home and their husbands would not have any idea where the money was, etc.
          </p>
          <p className="words">
            One of these young women had to flee Afghanistan. She was a victim of political violence and had to leave. She went on foot as a refugee through Iran, Turkey, and eventually settled in Germany. During this time, her Bitcoin, which she took with her, had accumulated in value quite a bit and she was entirely able to rebuild her life in Germany.
          </p>

          <Link className="primary-button" to="/stories">Read More</Link>

        </div>

        <div className= "cta-img"></div>

      </section>

    </div>
  );
}

export default Home;
