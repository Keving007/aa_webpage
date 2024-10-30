import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Enviando....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "7a8f71ac-b744-4ef9-9dab-2259dc855e70");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Formulario enviado exitosamente");
        event.target.reset();
      } else {
        console.log("Error no se pudo enviar el formulario", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Envianos un Mensaje <img src={msg_icon} alt="" /></h3>
        <p>No dude en comunicarse a través del formulario de contacto 
            o encontrar nuestra información de contacto a continuación. 
            Sus comentarios, preguntas y sugerencias son importantes 
            para nosotros mientras nos esforzamos por brindar un servicio 
            excepcional a todas aquellas personas que lo necesiten.</p>
            <ul>
                <li><img src={mail_icon} alt="" />centroaa@gmail.com</li>
                <li><img src={phone_icon} alt="" />0912345678</li>
                <li><img src={location_icon} alt="" />Av-123, Calle123 <br />Referencia123, Ciudad123</li>
            </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Nombre</label>
            <input type="text" name='name' placeholder='Ingrese su nombre'required />
            <label>Numero Celular</label>
            <input type="tel" name='phone' placeholder='Ingrese su numero de Celular' required/>
            <label>Escribe tu mensaje aquí</label>
            <textarea name="message" rows="6" placeholder='Ingrese su mensaje' required></textarea>
            <button type='submit' className='btn dark-btn'>Enviar Ahora <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
