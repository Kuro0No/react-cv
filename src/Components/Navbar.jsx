import React, { useEffect, useState } from 'react'
import '../Scss/Navbar.scss'
import { HomeOutlined, UserOutlined, ContactsOutlined, FormOutlined, DesktopOutlined, TrophyOutlined, CustomerServiceOutlined } from '@ant-design/icons';


const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0)
  const liTab = [
    { icon: <HomeOutlined />, name: "Home", slug: "home" },
    { icon: <UserOutlined />, name: "About", slug: "about" },
    { icon: <CustomerServiceOutlined />, name: "Services", slug: "services" },
    { icon: <TrophyOutlined />, name: "Experience", slug: "experience" },
    { icon: <DesktopOutlined />, name: "Work", slug: "work" },
    { icon: <FormOutlined />, name: "Blog", slug: "blog" },
    { icon: <ContactsOutlined />, name: "Contact", slug: "contact" },
  ]

  const handleClickNavbar = (index) => {
    setActiveTab(index)
   
  }
  




  return (
    <div className='navbar-container col-3'>
      <div className='navbar-logo'>
        <img src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="" />
      </div>
      <div className='navbar-section'>
        <ul>
          {liTab.map((tab, index) => {
            
            return (
              <li key={index}>
                <div className='icon-navbar'>
                  {tab.icon}
                </div>
                <a className={activeTab === index ? 'active'  : ''} onClick={() => handleClickNavbar(index)} href={`#${tab.slug}`}> {tab.name}</a>
              </li>
            )
          })}

         
        </ul>
      </div>

    </div>)




}

export default Navbar