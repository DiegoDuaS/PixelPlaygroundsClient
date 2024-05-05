import React from 'react'
import PropTypes from 'prop-types'
import './admincards.css'
import './card.css'

function AdminCard ({ id, nombre, fecha, info, onClick }) {
  return (
        <li className='admincard' onClick={() => onClick(id)}>
            <h2 className="game">{nombre}</h2>
            <h5 className="date">{fecha}</h5>
            <p className="info"> {info} </p>
        </li>
  );
}

AdminCard.propTypes = {
  id: PropTypes.number.isRequired,
  nombre: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default AdminCard
