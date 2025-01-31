import React from 'react'
import PageHeaderContent from '../../components/PageHeaderContent/PageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'
import amazon from '../../images/image1.jpg'
import apple from '../../images/image2.jpg'
import forum from '../../images/image3.jpg'
import netflix from '../../images/image4.jpg'
import './portfolio.scss'
import { Link } from 'react-router-dom'

function Portfolio() {

  const portfolioData = [
    {
      title: "Amazon Clone",
      image: amazon,
      description: "Amazon Clone is a web application that is built using React.js, Redux, Firebase, and Stripe API. It is a fully functional e-commerce website that allows users to browse products, add them to the cart, and checkout using the Stripe payment gateway.",
      techStack: ["React.js", "Redux", "Firebase", "Stripe API"],
      githubLink: " ",
      liveDemoLink: " ",
    },
    
    {
      title: "Forum Clone",
      image: forum,
      description: "Forum Clone is a web application that is built using React.js and Firebase. It is a platform where users can create an account, post questions, and answer questions posted by other users. The website is responsive and optimized for all devices.",
      techStack: ["React.js", "Firebase"],
      githubLink: " ",
      liveDemoLink: " ",
    },
    {
      title: "Netflix Clone",
      image: netflix,
      description: "Netflix Clone is a web application that is built using React.js and Firebase. It is a fully functional movie streaming website that allows users to browse movies, watch trailers, and sign up for an account. The website is responsive and optimized for all devices.",
      techStack: ["React.js", "Firebase"],
      githubLink: " ",
      liveDemoLink: " ",
    }];



  return (
    <search id='portfolio' className='portfolio'>
    <PageHeaderContent headerText='My Portfolio' icon={<BsInfoCircleFill size={40}/>} />

    <div className='portfolio__content__wrapper'>
      {portfolioData.map((item, index) => (
        <div key={index} className='portfolio__content'>
          <div className='portfolio__content__image'>
            <img src={item.image} alt={item.title} />
          </div>
          <div className='portfolio__content__text'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className='portfolio__content__techstack'>
              {item.techStack.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <div className='portfolio__content__links'>
              <Link to={item.githubLink} target='_blank' rel='noreferrer'>
                Github
              </Link>
              <Link to={item.liveDemoLink} target='_blank' rel='noreferrer'>
                Live Demo
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </search>
  )
}

export default Portfolio