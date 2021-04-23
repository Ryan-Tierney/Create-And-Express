import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from '../components/Logout'

const Navbar = props => {
  
  return (
    <nav className='nav '>
      {props.loggedIn ? 
        <>
        <div className='nav__link-container'>
          <NavLink className='nav__link' to="/">
            <span>
              Home
            </span>
          </NavLink>
          <NavLink className='nav__link' to="/myprofile">
            <span>
              Profile
            </span>  
          </NavLink>
          <NavLink className='nav__link' to="/creations">
          <span>
              Creations
            </span>
          </NavLink>
        </div>
        <div className='nav__logout-container'>
          <Logout /> 
        </div>
        </>
        :
        <div className='nav__link-container'>
          <NavLink className='nav__link' to="/">
            <span>
              Home
            </span>
          </NavLink>
          <NavLink className='nav__link' to="/signup">
            <span>
              Sign Up
            </span>
          </NavLink>
          <NavLink className='nav__link' to="/login">
            <span>
              Login
            </span>  
          </NavLink>
        </div>
      }
    </nav>
  )
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
  })
}

export default connect(mapStateToProps)(Navbar)