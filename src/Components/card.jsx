import React from 'react'
import PropTypes from 'prop-types'
import './card.css'

function Card ({ nombre, fecha, info, imagen }) {
  return (
        <li className='card'>
            <img src={imagen} alt="Game Image" className='big' />
            <h2 className="game">{nombre}</h2>
            <h5 className="date">{fecha}</h5>
            <p className="info"> {info} </p>
        </li>
  );
}

Card.propTypes = {
  nombre: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired
}

export default Card
