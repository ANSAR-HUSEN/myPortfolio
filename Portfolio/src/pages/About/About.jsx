import React from 'react'
import './about.scss'
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../components/PageHeaderContent/PageHeaderContent'

function About() {
  return (
    <search id='about' className='about'>
      <PageHeaderContent headerText='About Me' icon={<BsInfoCircleFill size={40}/>} />
    </search>
  )
}

export default About