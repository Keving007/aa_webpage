import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky, setSticky] =useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);


  const[mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

  }


  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='local' smooth={true} offset={0} duration={500}>Inicio</Link></li>
        <li><Link to='recursos' smooth={true} offset={-260} duration={500}>Recursos Educativos</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>Acerca de Nosotros</Link></li>
        <li><Link to='clinica' smooth={true} offset={-260} duration={500}>Herramientas de Autoevaluación</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-206} duration={500}>Testimonios</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contactos</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toogleMenu}/>
    </nav>
  )
}

export default Navbar
