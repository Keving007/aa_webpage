import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Local from './Components/Navbar/Local/Local'
import Recursos from './Components/Navbar/Recursos/Recursos'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Clinica from './Components/Clinica/Clinica'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'


const App = () => {

  const [playState, setPlayState] = useState(false);



  return (
    <div>
      <Navbar/>
      <Local/>
      <div className='container'>
      <Title subTitle='Nuestro Programa' title='Lo Que Ofrecemos'/>
      <Recursos/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Galleria' title='Fotos de la Clinica'/>
      <Clinica/>
      <Title subTitle='TESTIMONIOS' title='¿Qué dicen los Pacientes?'/>
      <Testimonials/>
      <Title subTitle='CONTACTANOS' title='Formulario de Contactos'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
