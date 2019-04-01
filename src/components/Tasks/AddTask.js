import React from 'react';

const AddTask = props => {
	return (
		<div className="add-task">
			<form method="POST" onSubmit={props.formSubmit}>
				<input
					name="task"
					id="task"
					type="text"
					onChange={props.changed}
				/>
				<button onClick={props.addTask}>Add Task</button>
			</form>
		</div>
	);
};

export default AddTask;
