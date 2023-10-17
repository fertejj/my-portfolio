import React from 'react'
import './services.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
        <h2>Servicios</h2>

        <div className="container services__container">
            <article className='service'>
                <div className='service__head'>
                    <h3>Desarrollo de Landing Page</h3>
                </div>

                <ul className='service__list'>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Atencion personalizada.</p>
                  </li>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Asesoramiento en colorimetria.</p>
                  </li>
                                    <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Agregado de funcionalidades especificas.</p>
                  </li>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Dominio a tu eleccion (.com, .net, store, etc).</p>
                  </li>
                </ul>
            </article>
            <article className='service'>
                <div className='service__head'>
                    <h3>Servicio Tecnico</h3>
                </div>

                <ul className='service__list'>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Formateo.</p>
                  </li>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Mantenimiento en general.</p>
                  </li>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Reparaciones en general.</p>
                  </li>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Armado de equipos.</p>
                  </li>
                  <li>
                    <AiOutlineCheckCircle className='service__list-icon'/>
                    <p>Instalaciones en puestos de trabajo.</p>
                  </li>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Services