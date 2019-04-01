import React, { Component } from 'react';
import './assets/css/reset.css';
import './App.css';

import Boards from './components/Boards/Boards';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="app-header">
					<ul className="header-menu menu-left">
						<li>Home</li>
						<li>Tasks</li>
					</ul>
				</div>
				<div className="app-body">
					<Boards />
				</div>
			</div>
		);
	}
}

export default App;
