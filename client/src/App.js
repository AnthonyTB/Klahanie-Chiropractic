import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Appointment from './Pages/Appointment';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/Services" component={Services} />
					<Route exact path="/About" component={About} />
					<Route exact path="/Appointment" component={Appointment} />
				</Switch>
			</Router>
		);
	}
}

export default App;
