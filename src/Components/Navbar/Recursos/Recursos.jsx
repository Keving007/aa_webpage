import React from 'react'
import './Recursos.css'
import recurso_1 from '../../../assets/recurso_1.jpg'
import recurso_2 from '../../../assets/recurso_2.jpg'
import recurso_3 from '../../../assets/recurso_3.jpg'
import recurso_icon_1 from '../../../assets/recurso_icon_1.png'
import recurso_icon_2 from '../../../assets/recurso_icon_2.png'
import recurso_icon_3 from '../../../assets/recurso_icon_3.png'
const Recursos = () => {
  return (
    <div className='recursos'>
        <div className='recurso'>
            <img src={recurso_1} alt="" />
            <div className="caption">
              <img src={recurso_icon_1} alt="" />
              <p>Superacion Personal</p>
            </div>
        </div>
        <div className='recurso'>
            <img src={recurso_2} alt="" />
            <div className="caption">
              <img src={recurso_icon_2} alt="" />
              <p>Reuniones Periodicas</p>
            </div>
        </div>
        <div className='recurso'>
            <img src={recurso_3} alt="" />
            <div className="caption">
              <img src={recurso_icon_3} alt="" />
              <p>Salud Mental</p>
            </div>
        </div>
      
    </div>
  )
}

export default Recursos
