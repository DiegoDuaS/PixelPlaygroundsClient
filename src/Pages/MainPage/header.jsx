import React from 'react'
import './header.css'
import useNavigate from '../../Hooks/useNavigation'

function HeaderMain () {
  const { navigate } = useNavigate()

  return (
        <>
        <header className='main'>
            <div className = 'restitle'> Pixel Playgrounds </div>
            <button className ='goadmin' onClick={() => navigate('/admin')}>Administracion</button>
        </header>
        </>
  )
}

export default HeaderMain
