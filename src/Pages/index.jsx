import PropTypes from 'prop-types'

import useNavigate from '../Hooks/useNavigation'
import useToken from '../Hooks/useToken'

import HomePage from './MainPage/homepage'
import LoginPage from './LoginPage/loginpage'
import AdminPage from './AdminPage/adminpage'

import HeaderLogin from './LoginPage/header'
import './MainPage/mainsection.css'

const routes = {
    '/': {
      component: HomePage,
      requiresAuth: false
    }, 
    '/login': {
      component: LoginPage,
      requiresAuth: false
    },   
    '/admin': {
      component: AdminPage,
      requiresAuth: true
    }
  }


const Pages = () => {
    const { page, navigate } = useNavigate()
    const { token } = useToken() 
    
    let CurrentPage = () => <h1>404</h1>

    if (routes[page] && routes[page].requiresAuth && !token) {
      return <div className='box'> 
        <HeaderLogin/>
        <h1 className='unauthorized'>No autorizado</h1>
        <a className='gologin' href='/login' onClick={() => navigate('/login')}>Iniciar Sesión</a>
      </div>
    }
  
    CurrentPage = routes[page].component
  
    return (
      <div>
        <CurrentPage />
      </div>
    )
  }

  Pages.propTypes = {
    token: PropTypes.string,
    setToken: PropTypes.func
  } 
  
  export default Pages