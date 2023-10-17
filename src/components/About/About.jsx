import React from 'react'
import "./about.css"
import ME from "../../assets/fotoperfil.jpeg"
import AboutCards from './AboutCards'


const About = () => {
  return (
    <section id='about'>
      <h5>Conoce</h5>
      <h2>Sobre Mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <AboutCards/>
          <p> Soy Programador Full-Stack, actualmente no me encuentro trabajando a tiempo completo como desarrollador debido a que decidi dedicar mas tiempo a los estudios. 
          </p>
          <p>           Estoy estudiando la carrera de "Analista Programador" en la Facultad de Ingenieria de la Universidad Publica Argentina de San Salvador de Jujuy. 
     </p>
     <p>Desde pequeño fui apasionado por la computadora, aunque, tarde en dar el paso a transformar esto en el centro de mi vida profesional. Hoy luego de mi primer puesto laboral logrado y estudiando una carrera universitaria, me doy cuenta que es mi pasion y que quiero dedicarme a esto para ser mejor dia a dia.</p>
          <a href="#contact" className='btn btn-primary'>Contactame!</a>
        </div>
      </div>
    </section>
  )
}

export default About