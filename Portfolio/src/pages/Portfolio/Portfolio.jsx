import React from 'react'
import PageHeaderContent from '../../components/PageHeaderContent/PageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'

function Portfolio() {
  return (
    <search id='portfolio' className='portfolio'>
    <PageHeaderContent headerText='My Portfolio' icon={<BsInfoCircleFill size={40}/>} />
  </search>
  )
}

export default Portfolio