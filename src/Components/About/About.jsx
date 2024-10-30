import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ACERCA DEL ALCOHOLISMO</h3>
        <h2>Video Sobre el Alcoholismo</h2>
        <p>Este es un video introductorio sobre el alcoholismo
            tambien el como identificar si se padece de esta enfermedad,  
            ademas de las causas que la provocan y el daño que esta 
            representa asia nuestra persona y a las personas que nos rodean.</p>
        <p>Revisalo es informacion util, valiosa y muy beneficiosa.</p>
      </div>
    </div>
  )
}

export default About
