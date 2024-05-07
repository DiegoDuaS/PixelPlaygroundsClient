import React from 'react'
import './header.css'
import useNavigate from '../../Hooks/useNavigation'

function HeaderLogin () {
  const { navigate } = useNavigate()

  return (
        <>
        <header className='lmain'>
            <div className = 'restitlel'> Pixel Playgrounds Admin</div>
            <button className='gomain' onClick={() => navigate('/')}>Pagina Principal</button>
        </header>
        </>
  )
}

export default HeaderLogin
