import React from 'react'
import './header.css'
import HeaderCTA from './HeaderCTA'
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola soy</h5>
        <h1>Fer Tejerina</h1>
        <h5 className="text-light">Frontend Developer</h5>
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