import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent/PageHeaderContent";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./skills.scss";

function Skills() {
  const skillsData = [
    {
      label: "Front End",
      data: [
        { skillName: "HTML", percentage: 90 },
        { skillName: "CSS", percentage: 85 },
        { skillName: "JavaScript", percentage: 80 },
        { skillName: "React", percentage: 75 },
        { skillName: "Vue.js", percentage: 70 },
      ],
    },
    {
      label: "Back End",
      data: [
        { skillName: "Node.js", percentage: 85 },
        { skillName: "Express", percentage: 80 },
        { skillName: "Django", percentage: 75 },
        { skillName: "Spring Boot", percentage: 70 },
      ],
    },
    {
      label: "Database",
      data: [
        { skillName: "MongoDB", percentage: 80 },
        { skillName: "PostgreSQL", percentage: 85 },
        { skillName: "MySQL", percentage: 75 },
      ],
    },
  ];

  return (
    <search id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content__wrapper">
        {skillsData.map((item, index) => (
          <div key={index} className="skills__content__wrapper__inner__content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0)",
              }}
            >
              <h3 className="skills__content__wrapper__inner__content__category__text">
                {item.label}
              </h3>
              <div>
                {item.data.map((skillItem, index) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity: 0", "opacity: 1"]}
                    iterationCount={1}
                  >
                    <div className="progressbar__wrapper">
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-main-color)"
                        trailWidth="2"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </search>
  );
}

export default Skills;
