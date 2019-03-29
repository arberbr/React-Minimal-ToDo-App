import React from 'react';
import Task from './Task';

const Tasks = (props) => {
	
	let task = props.tasksList.map( task => {
		return <Task key={task.id} taskId={task.id} name={task.item} status={task.active} clickedSingleTask={props.changeTaskStatus} deleteSingleTask={props.deleteSingleTask} />;
	});
	
	let renderTasks = props.tasksList.length ? (
		<div className="tasks-box">
			<ul>
				{task}
			</ul>
		</div>
	) : '';

	return renderTasks;
};

export default Tasks;
