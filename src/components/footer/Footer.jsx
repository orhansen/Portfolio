import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Owen Hansen</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/owen-hansen/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/orhansen" target='_blank'><AiOutlineGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Owen Hansesn. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer