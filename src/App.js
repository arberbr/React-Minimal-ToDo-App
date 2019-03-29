import React, { Component } from 'react';
import './assets/css/reset.css';
import './App.css';

import TasksList from './components/Tasks/TasksList';

class App extends Component {
	render() {
		return (
			<div className="App">
				
				<div className="app-header">
					<div className="container">
						
						<ul className="header-menu">
							<li>Home</li>
							<li>Tasks</li>
						</ul>
						
					</div>
				</div>
				
				<div className="app-body">
					<div className="container">
						<TasksList />
					</div>
				</div>
				
			</div>
		);
	}
}

export default App;
