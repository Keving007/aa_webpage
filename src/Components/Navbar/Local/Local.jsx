import React from 'react'
import './Local.css'
import dark_arrow from '../../../assets/dark-arrow.png'

const Local = () => {
  return (
    <div className='local container'>
      <div className="local-text">
      <h1>Centro de Rehabilitación para Alcohólicos Anonimos "VOLVER A VIVIR"</h1>
      <p>Nuestro centro de Alcohólicos Anónimos ofrece un espacio seguro y confidencial para aquellas 
        personas que desean superar su adicción al alcohol. Basado en un programa de apoyo mutuo y 
        recuperación en 12 pasos, brindamos a los miembros herramientas, orientación y una comunidad 
        comprensiva para enfrentar los desafíos del alcoholismo.</p>
      <button className='btn'>Explorar Más <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Local
