import React from 'react'
import './about.css'
import ME from '../../assets/IMG_7440_square.jpg'
import {FaAward} from 'react-icons/fa'
import {GiGraduateCap} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={ME} alt='Pic of me'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <GiGraduateCap className='about__icon'/>
              <h5>Education</h5>
              <small>Masters of Information Systems Management</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Interests</h5>
              <small>Development <br></br>Data Analytics <br></br> Product Managment</small>
            </article>
          </div>
          <p>
          My name is Owen Hansen from the DFW area, currently studying Information Systems at the Marriott School of Business
           at Brigham Young University in Provo, UT. I love seeing technology evolve and using its increased capabilities to 
           solve problems. I am studying information systems, because i want to make a difference in the world by developing 
           and innovating processes and systems, to create a more secure and efficient future.
          <br></br>
          <br></br>
          I have held various work positions including customer service, management, and currently serve as a computing 
          specialist for BYU dining services information systems department. I am also involved in the Association of Information 
          Systems and Healthcare Industry Association clubs at BYU. I feel my interpersonal skills and ability to work as a team 
          to be among the greatest skills i have acquired and one of my greatest joys. I love the opportunity to continually learn 
          new skills and programs and implement them to make a positive impact in the workplace and community as a whole.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About