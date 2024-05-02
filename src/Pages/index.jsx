//import PropTypes from 'prop-types'

import useNavigate from '../Hooks/useNavigation'

import HomePage from './MainPage/homepage'
import LoginPage from './LoginPage/loginpage'
import AdminPage from './AdminPage/adminpage'

import HeaderLogin from './LoginPage/header'

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
    
    let CurrentPage = () => <h1>404</h1>
    // && !token

    if (routes[page] && routes[page].requiresAuth ) {
      return <div> 
        <HeaderLogin/>
        <h1>Unauthorized</h1>
        <a href='/login' onClick={() => navigate('/login')}>Please login</a>
      </div>
    }
  
    CurrentPage = routes[page].component
    console.log('Current page:', page);
  
    return (
      <div>
        <CurrentPage />
      </div>
    )
  }

  /* Pages.propTypes = {
    token: PropTypes.string,
    setToken: PropTypes.func
  } */
  
  export default Pages