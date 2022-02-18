import React from 'react'
import '../Scss/Experience.scss'
import { FieldTimeOutlined } from '@ant-design/icons';

const Experience = () => {
  return (
    <div id='experience'>
      <div className='exp-wrap'>

        <h2>Experience</h2>
        <div className='experience-content'>
          <div className='study-content col-6'>
            <div className='std-wrap'>
              <div className='timeline-item'>
                <div className='icon-timeline'>
                  <FieldTimeOutlined />
                </div>
                <span className='line-border line-study-1'></span>


                <div className='timeline-text'>
                  <span className='span-time'>9/2021 đến nay</span>
                  <h3> IT </h3>
                  <p> Trong thời gian tránh dịch ở nhà, bắt đầu học HTML, CSS, Javascripts, Reactjs, Nodejs(1 chút) </p>
                </div>
              </div>
              <div className='timeline-item'>
                <div className='icon-timeline'>
                  <FieldTimeOutlined />
                </div>
                <span className='line-border line-study-2'></span>


                <div className='timeline-text'>
                  <span className='span-time'>3/2020</span>
                  <h3> Ngôn ngữ </h3>
                  <p> Bắt đầu học IELTS tại ODIN language</p>
                </div>

              </div>
              <div className='timeline-item'>
                <div className='icon-timeline'>
                  <FieldTimeOutlined />
                </div>
                <span className='line-border line-3'></span>

                <div className='timeline-text'>
                  <span className='span-time'>2019</span>
                  <h3> Đại học</h3>
                  <p> Bắt đầu tại Đại học Luật Hà Nội.</p>
                </div>

              </div>
            </div>
          </div>
          <div className='work-content col-6'>
            <div className='work-wrap'>

              <div className='timeline-item'>
                <div className='icon-timeline'>
                  <FieldTimeOutlined />
                </div>
                <span className='line-border'></span>


                <div className='timeline-text'>
                  <span className='span-time'>12/2020 - 5/2020</span>
                  <h3> Quản lý kinh doanh </h3>
                  <p> Bắt đầu quản lý kinh doanh tại Odin Academy </p>
                </div>
              </div>

              <div className='timeline-item'>
                <div className='icon-timeline'>
                  <FieldTimeOutlined />
                </div>
                <span className='line-border'></span>

                <div className='timeline-text'>
                  <span className='span-time'>9/2021 đến nay</span>
                  <h3> Bán thời gian </h3>
                  <p> Công việc bán thời gian tại Highland Coffe  <s></s> </p>
                </div>
              </div>

              <div className='timeline-item'>
                <div className='icon-timeline'>
                  <FieldTimeOutlined />
                </div>
                <span className='line-border line-3'></span>


                <div className='timeline-text'>
                  <span className='span-time'>8/2019</span>
                  <h3> Nhân viên </h3>
                  <p> Nhân viên tại Green Land Phủ Lý </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
