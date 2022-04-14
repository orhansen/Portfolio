import React from 'react'
import './portfolio.css'
import ANALYTICS from '../../assets/analytics.JPG'
import SCRIPMAP from '../../assets/scripmap.JPG'
import PM from '../../assets/pm.JPG'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={SCRIPMAP} alt="Scripture app pic" />
        </div>
        <h3>Interactive Scripture Geolocater</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
        
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={ANALYTICS} alt="Data Analytics pic" />
        </div>
        <h3>Data Analytics with Python</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>

        <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={PM} alt="Product Managment pic" />
        </div>
        <h3>Product Managment Feature Innovation</h3>
        <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio