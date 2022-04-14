import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/IMG_7446_square.jpg'
import HEADERSOCIALS from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Owen Hansen</h1>
        <h5 className='text-light'>Masters of Information Systems Management Student</h5>
        <CTA />
        <HEADERSOCIALS />

        <div className='me'>
          <img className='img__header' src={ME} alt='' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header