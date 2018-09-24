import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import AuthService from './services'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedExample from './pages/ProtectedExample'
import PublicExample from './pages/PublicExample'

class App extends Component {
	render() {
		// creates new instance of AuthService class
		let auth = new AuthService()
		
		return (
			<div>
				<Router>
					{(auth.loggedIn())
					// if logged in
					? <Switch>
						<Route exact path="/public" component={PublicExample} />
						<Route exact path="/protected" component={ProtectedExample} />
						<Route exact path="/register" component={Register} />
					</Switch>
					// if not logged in (ie Guest User)
					: <Switch>
						<Route exact path="/public" component={PublicExample} />
						<Redirect from="/protected" to="/register" />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login"
						component={Login} />
					</Switch>}
				</Router>
			</div>
		);
	}
}

export default App;
