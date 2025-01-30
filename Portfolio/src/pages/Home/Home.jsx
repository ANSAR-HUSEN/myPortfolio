import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./home.scss";

function Home() {
  const navigate = useNavigate();

  const handleNavigateToContactPage = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Ansar
          <br />
          Front end developer
        </h1>
      </div>
      <Animate 
      play
      duration={1.5}
      delay={1}
      start={{
        transform: "translateY(550px)",
      }
      
      }
      end={{
        transform: "translateY(0)",
      }}
      
      
      
      >
        <div className="home__contact__me">
          <button onClick={handleNavigateToContactPage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
}

export default Home;
