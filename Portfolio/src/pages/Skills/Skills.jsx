import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../components/PageHeaderContent/PageHeaderContent'

function Skills() {
  return (
    <search id='skills' className='skills'>
    <PageHeaderContent headerText='My Skills' icon={<BsInfoCircleFill size={40}/>} />
  </search>
  )
}

export default Skills