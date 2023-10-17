import React from 'react'
import CV from '../../assets/FULLSTACK-TEJERINA-FERNANDO.pdf'

const HeaderCTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary'>Descarga mi CV</a>
        <a href="#contact" className='btn btn-primary'>Email</a>
    </div>
  )
}

export default HeaderCTA