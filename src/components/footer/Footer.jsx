import React from 'react'
import './footer.css'
import {RiGithubFill} from 'react-icons/ri'
import {FaLinkedin} from 'react-icons/fa'
import {MdVideogameAsset} from 'react-icons/md'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MaccaSQS</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/" target="_blank"><RiGithubFill/></a>
        <a href="https://uk.linkedin.com/" target="_blank"><FaLinkedin/></a>
        <a href="https://ClashingBlades.vercel.com" target="_blank"><MdVideogameAsset/></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; MaccaSQS @SkyquakeStudios. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer