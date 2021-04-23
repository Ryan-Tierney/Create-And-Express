import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import CreationContainer from './CreationContainer'

class MyProfile extends Component {

    componentDidMount() {
        this.props.getCurrentUser()
    }

    render() {
        return (
            <>
            <div className='profile-headers'>
                <h2 className='heading-secondary'>Welcome, {this.props.currentUser && this.props.currentUser.name}</h2>
            </div>
            <CreationContainer />
            </>
        )
    }
}

const mapStateToProps = state => {
    return ({
        currentUser: state.currentUser.currentUser
    })
}


export default connect(mapStateToProps, { getCurrentUser })(MyProfile)