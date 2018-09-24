import React, { Component } from 'react'

import Header from '../components/Header'

class ProtectedExample extends Component {
    render() {
        return (
            <div>
                <Header />
                <p>This page is protected!</p>
            </div>
        )
    }
}

export default ProtectedExample
