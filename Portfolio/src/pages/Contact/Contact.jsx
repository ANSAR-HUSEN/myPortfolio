import React from 'react'
import PageHeaderContent from '../../components/PageHeaderContent/PageHeaderContent'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import './contact.scss'

function Contact() {
  return (
    <search id='contact' className='contact'>
      <PageHeaderContent headerText='My Contact' icon={<BsInfoCircleFill size={40}/>} />
      <div className='contact__content'>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(-200px)',
          }}
          end={{
            transform: 'translateX(0)',
          }}
        >
          <h3 className='contact__content__title'>Let's Talk</h3>

        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(200px)',
          }}
          end={{
            transform: 'translateX(0)',
          }}
        >
          <div className='contact__content__form'>
            <div className='contact__content__form__controlswrapper'>
              <div className='namewrapper'>
                <input required type='text'  className='inputname' />
                <label htmlFor="name" className='namelabel'>Name</label>

              </div>
              <div className='emailwrapper'>
                <input required type='email'  className='inputemail' />
                <label htmlFor="email" className='emaillabel'>Email</label>
              </div>
              <div className='descriptionwrapper'>
                <textarea rows={5} required type="text" className='inputdesc' />
                <label htmlFor="description" className='desclabel'>Description</label>
              </div>

            </div>
            <button>Submit</button>
          </div>

        </Animate>

      </div>
    </search>
  )
}

export default Contact