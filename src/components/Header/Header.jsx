import React from 'react'
import './header.css'
import HeaderCTA from './HeaderCTA'
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4 className="name">Hola soy</h4>
        <h1 className='name-bold'>Fernando Tejerina</h1>
        <h5 className="text-light">Programador Full-Stack</h5>

        <h1>Actualmente al 17/10/2023 me encuentro actualizando el portafolio, tanto en su contenido como en su visual.</h1>
        <h1>Perdonen las molestias</h1>
        <HeaderCTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Desliza hacia abajo</a>
      </div>
    </header>
  )
}

export default Header