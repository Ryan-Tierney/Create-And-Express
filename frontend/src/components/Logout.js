import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'
import { withRouter } from 'react-router-dom'

const Logout = ({ logout, history }) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            logout(history)
        }
    }>
        <input className='btn btn--small' type='submit' value='Log Out'/>
        </form>
    )
}

export default withRouter(connect(null, { logout } )(Logout))