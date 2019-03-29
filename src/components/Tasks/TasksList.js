import React, { Component } from 'react';

import Tasks from './Tasks';
import AddTask from './AddTask';
import TasksListHeader from './TasksListHeader';
import TasksListFooter from './TasksListFooter';

class TasksList extends Component {
	state = {
		task: '',
		tasks: []
	};

	addTaskHandler = () => {
		if (this.state.task.length <= 3) {
			alert('Please enter some text to describe the Task!');
			return;
		}
		const newTask = {
			id: Date.now(),
			item: this.state.task,
			active: true
		};
		const allTasks = this.state.tasks.concat(newTask);
		this.setState({
			tasks: allTasks
		});
	};

	onFormSubmit = event => {
		event.preventDefault();
	};

	onChangeHandler = event => {
		this.setState({
			task: event.target.value
		});
	};

	changeTaskStatus = taskId => {
		const newTasks = this.state.tasks.map(task => {
			if (task.id === taskId) task = { ...task, active: !task.active };
			return task;
		});
		this.setState({
			tasks: newTasks
		});
	};

	deleteSingleTask = taskId => {
		const chosenTask = this.state.tasks.filter(task => {
			return task.id !== taskId;
		});
		this.setState({
			tasks: chosenTask
		});
	};

	render() {
		return (
			<div className="taskslist-box">
				<TasksListHeader />
				<AddTask
					addTask={() => this.addTaskHandler()}
					changed={event => this.onChangeHandler(event)}
					formSubmit={event => this.onFormSubmit(event)}
				/>
				<Tasks
					tasksList={this.state.tasks}
					changeTaskStatus={taskId => this.changeTaskStatus(taskId)}
					deleteSingleTask={taskId => this.deleteSingleTask(taskId)}
				/>
				<TasksListFooter tasksList={this.state.tasks} />
			</div>
		);
	}
}

export default TasksList;
