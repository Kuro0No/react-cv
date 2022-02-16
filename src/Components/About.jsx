import React from 'react'
import '../Scss/About.scss'

const About = () => {
  return (
    <div className='about-container' id="about">
      <h2>About me</h2>
      <div className='info-about'>
        <div className='col-3 left-about'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWPkoD_BlrMnQbA3rx3OFD-xHD86fc3S3XA&usqp=CAU" alt="" />
        </div>
        <div className='col-9 right-about'>
          <div className='right-text col-6'>
            <p>            I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at WordPress.
            </p>
          </div>
          <div className='right-progress'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
