import React from 'react';

const Task = (props) => {
	return (
		<li>
			<span className={props.status ? 'active' : ''} onClick={() => props.clickedSingleTask(props.taskId)}>{props.name}</span>
			<button className="remove-task" onClick={() => props.deleteSingleTask(props.taskId)}>
				&times;
			</button>
		</li>
	)
};

export default Task;
