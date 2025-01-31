import React from "react";
import "./about.scss";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import { Animate } from "react-simple-animate";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

function About() {
  const personalDetails = [
    { label: "Name", value: "Ansar Husen" },
    { label: "Age", value: "23" },
    { label: "Email", value: "ansarhusenfereja@gmail.com" },
    { label: "Contact No.", value: "+251931468627" },
  ];

  const jobsummary =
    "I thrive at the intersection of design and technology, where creativity meets functionality. My expertise lies in building dynamic, high-performance interfaces that not only look great but also deliver seamless user experiences. Whether it’s crafting pixel-perfect layouts, optimizing for speed and performance, or ensuring cross-browser compatibility, I’m dedicated to delivering solutions that exceed expectations. I’m also passionate about staying up-to-date with the latest trends and best practices in web development, from responsive design and accessibility (WCAG compliance) to progressive web apps (PWAs) and performance optimization.";

  return (
    <search id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalwrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobsummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0)",
            }}
          >
            <h3 className="personalinfoheadertext">Personal Information</h3>

            <ul>
              {personalDetails.map((item, index) => {
                return (
                  <li key={index}>
                    <span className="title">{item.label}: </span>
                    <span className="value">{item.value}</span>
                  </li>
                );
              })}
            </ul>
          </Animate>
        </div>
        <div className="about__content__serviceswrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0)",
            }}
          >
          <div className="about__content__serviceswrapper__innercontent">
            <div>
              <FaDev size={60} color="var(--yellow-main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var(--yellow-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var(--yellow-main-color)" />
            </div>
            <div>
              <DiApple oid size={60} color="var(--yellow-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </search>
  );
}

export default About;
