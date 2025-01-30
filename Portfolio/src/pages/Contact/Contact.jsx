import React from 'react'
import PageHeaderContent from '../../components/PageHeaderContent/PageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'

function Contact() {
  return (
    <search id='contact' className='contact'>
      <PageHeaderContent headerText='My Contact' icon={<BsInfoCircleFill size={40}/>} />
    </search>
  )
}

export default Contact