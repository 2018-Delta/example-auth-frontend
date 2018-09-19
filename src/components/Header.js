import React, { Component } from 'react'

import AuthService from '../services'

class Header extends Component {
    render() {
        let auth = new AuthService()

        // check if the user is logged in or not
        if(auth.loggedIn()){
            return ( <button onClick={auth.logout}> Logout </button> )
        } else {
            return( <a href="/login"><button> Login </button></a>)
        }
    }
}

export default Header
