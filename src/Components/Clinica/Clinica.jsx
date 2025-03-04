import React from 'react'
import './Clinica.css'
import gallery_1 from '../../assets/gallery_1.jpg'
import gallery_2 from '../../assets/gallery_2.jpg'
import gallery_3 from '../../assets/gallery_3.jpg'
import gallery_4 from '../../assets/gallery_4.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Clinica = () => {
  return (
    <div className='clinica'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className='btn dark-btn'>Mirar más aqui <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Clinica
