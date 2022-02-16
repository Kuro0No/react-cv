
import React from 'react'
import '../Scss/Home.scss'
import { Button } from 'antd';
import { InstagramOutlined, FacebookOutlined } from '@ant-design/icons';




const Home = () => {
  return (
    <div className='home-container' id='home'>
      <div className='intro'>
        <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="" />
        <h1>Mạnh Khải</h1>
        <p>Im a aaaaaa</p>
        <div className='home-media'>
          <a href=""><InstagramOutlined /></a>
          <a href=""><FacebookOutlined /></a>
        </div>
        <div className='button-home'>
          <Button type="danger" shape="round">
            Hire me
          </Button>
        </div>
      </div>

    </div>
  )
}

export default Home