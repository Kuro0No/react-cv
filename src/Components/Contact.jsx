import React, { useState } from 'react'
import '../Scss/Contact.scss'
import { Button } from 'antd'
import useForm from '../HookCustom/useForm'
import Validate from '../HookCustom/Validate'

const Contact = () => {


  const { values, handleChange, handleSend, textErr,loading } = useForm(Validate)
  console.log(loading)



  return (
    <div id="contact">
      <div className='contact-wrap'>
        <h2>Get In Touch</h2>
        <div className='contact-content'>
          <div className='col-4 left'>
            <h3>Liên lạc với tôi để trao đổi!</h3>
            <p>
              Để biết rõ hơn, gửi email cho tôi.
            </p>
          </div>

          <div className='col-8 right'>
            <div className='input-group'>
              <div>
                <input placeholder="Tên bạn" value={values.name} onChange={handleChange} name='name' type="text" />
                <p>{textErr.name}</p>
              </div>
              <div>
                <input placeholder='Email' onChange={handleChange} value={values.email} name='email' type="email" />
                <p>{textErr.email}</p>

              </div>
            </div>
            <div className='input-group-2'>
              <div>
                <input placeholder='Tiêu đề' onChange={handleChange} value={values.title} name='title' type="text" />
                <p>{textErr.title}</p>

              </div>

            </div>
            <div className='input-group-3'>
              <div>
                <textarea placeholder='Nội dung' onChange={handleChange} value={values.content} name="content" id="" cols="30" rows="10"></textarea>
                <p>{textErr.content}</p>
                
              </div>
            </div>
            <Button loading={loading} disabled={loading} onClick={handleSend} type="primary" shape="round" >
              Send
            </Button>



          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
