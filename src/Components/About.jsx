import React, { useEffect,useRef, useState } from 'react'
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
            <h2>About</h2>
            <p>            I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at WordPress.
            </p>
          </div>

          <div className='col-6 about-info'>
            <h2>Basic Info</h2>
            <div className='info-item'>
              <h6 className='col-4'>Age</h6>
              <p >24</p>
            </div>
            <div className='info-item'>
              <h6 className='col-4'>Email</h6>
              <p >khaimt.odin@gmail.com</p>
            </div>
            <div className='info-item'>
              <h6 className='col-4'>Phone</h6>
              <p >091132****</p>
            </div>
            <div className='info-item'>
              <h6 className='col-4'>Address</h6>
              <p >Phu Ly city, Ha Nam district</p>
            </div>
            <div className='info-item'>
              <h6 className='col-4'>Languages</h6>
              <p >English, Vietnamese</p>
            </div>
          </div>
        </div>
      </div>


      <div  className='skill-info-container'>
        <div className='about-skill-progress-group row'>
          <Progress name="HTML" done="85%" />
          <Progress name="CSS" done="85%" />
        </div>

        <div className='about-skill-progress-group row'>
          <Progress name="JAVASCRIPT" done="75%" />
          <Progress name="SASS" done="75%" />
        </div>

        <div className='about-skill-progress-group row'>
          <Progress name="BOOSTRAP" done="75%" />
          <Progress name="ANTD" done="75%" />
        </div>

        <div className='about-skill-progress-group row'>
          <Progress name="REACT" done="75%" />
          <Progress name="ADOBE PREMIERE" done="60%" />

        </div>
      </div>


    </div>
    
  )
}

export default About


const Progress = ({ name, done }) => {


  const [width, setWidth] = useState()
  useEffect(() => {

    setWidth(done)

  }, [])

  return (
    <>
      <div className='skill-item col-6'>
        <div className='skill-info '>
          <p>{name}</p>
          <p>{done}</p>
        </div>
        <div className='skill-progress'>
          <div style={{ width: width }} className='progress-bar'></div>
        </div>
      </div>

    </>
  )
}