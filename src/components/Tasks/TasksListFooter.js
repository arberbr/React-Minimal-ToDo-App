import React from 'react';
import ShowStats from './ShowStats';

const TasksListFooter = (props) => {
	return (
		<div className="tasks-box-footer">
			<ShowStats tasksList={props.tasksList}/>
		</div>
	);
};

export default TasksListFooter;
