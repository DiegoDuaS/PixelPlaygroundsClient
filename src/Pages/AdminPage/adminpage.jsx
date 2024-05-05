import React, { useState } from 'react'
import HeaderLogin from '../LoginPage/header'
import NavBar from '../../Components/nav'

import NewPost from './newpost'
import EditPost from './editpost'
import DeletePost from './deletepost'

function AdminPage () {
  const [selectedOption, setSelectedOption] = useState('nuevopost')

  return (
        <>
            <HeaderLogin> </HeaderLogin>
            <NavBar selectedOption={selectedOption} setSelectedOption={setSelectedOption}></NavBar>
            {selectedOption === 'nuevopost' && <NewPost/>}
            {selectedOption === 'editarpost' && <EditPost/>}
            {selectedOption === 'borrarpost' && <DeletePost/>}
        </>
  )
}

export default AdminPage
