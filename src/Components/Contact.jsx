import React from 'react'
import '../Scss/Contact.scss'
import { Button } from 'antd'

const Contact = () => {
  return (
    <div id="contact">
      <div className='contact-wrap'>
        <h2>Get In Touch</h2>
        <div className='contact-content'>
          <div className='col-4 left'>
            <h3>Hãy nói về mọi thứ!</h3>
            <p>
              Gửi tôi email
            </p>
          </div>

          <div className='col-8 right'>
            <div className='input-group'>
              <input type="text" />
              <input type="email" />
            </div>
            <div className='input-group-2'>
              <input type="text" />

            </div>
            <div className='input-group-3'>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <Button type="primary"  />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
