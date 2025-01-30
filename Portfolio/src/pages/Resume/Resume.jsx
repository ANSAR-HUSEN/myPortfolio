import React from 'react'
import PageHeaderContent from '../../components/PageHeaderContent/PageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'

function Resume() {
  return (
    <search id='resume' className='resume'>
    <PageHeaderContent headerText='My Resume' icon={<BsInfoCircleFill size={40}/>} />
  </search>
  )
}

export default Resume