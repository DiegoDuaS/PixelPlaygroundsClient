import React from 'react'
import PropTypes from 'prop-types'
import './nav.css'

function NavBar ({ selectedOption, setSelectedOption }) {
  return (
      <nav>
        <ul className='nav'>
          <li className={`nav ${selectedOption === 'nuevopost' ? 'selected' : ''}`} onClick={() => setSelectedOption('nuevopost')}><a href="#" className='nava' onClick={() => setSelectedOption('nuevopost')}>Nuevo Post</a></li>
          <li className={`nav ${selectedOption === 'editarpost' ? 'selected' : ''}`} onClick={() => setSelectedOption('editarpost')}><a href="#" className='nava' onClick={() => setSelectedOption('editarpost')}>Editar Post</a></li>
          <li className={`nav ${selectedOption === 'borrarpost' ? 'selected' : ''}`} onClick={() => setSelectedOption('borrarpost')}><a href="#" className='nava' onClick={() => setSelectedOption('borrarpost')}>Eliminar Post</a></li>
        </ul>
      </nav>
  );
}

NavBar.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  setSelectedOption: PropTypes.func.isRequired
}

export default NavBar
