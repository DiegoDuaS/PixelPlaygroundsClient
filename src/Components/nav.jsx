import './nav.css'
import React, { useState } from 'react';


function NavBar() {
    
    const [selectedOption, setSelectedOption] = useState("");
    return (
      <nav>
        <ul className='nav'>
          <li className={`nav ${selectedOption === 'nuevopost' ? 'selected' : ''}`}><a href="#" className='nava' onClick={() => setSelectedOption('nuevopost')}>Nuevo Post</a></li>
          <li className={`nav ${selectedOption === 'editarpost' ? 'selected' : ''}`}><a href="#" className='nava' onClick={() => setSelectedOption('editarpost')}>Editar Post</a></li>
          <li className={`nav ${selectedOption === 'borrarpost' ? 'selected' : ''}`}><a href="#" className='nava' onClick={() => setSelectedOption('borrarpost')}>Eliminar Post</a></li>
        </ul>
      </nav>
    );
  }

export default NavBar