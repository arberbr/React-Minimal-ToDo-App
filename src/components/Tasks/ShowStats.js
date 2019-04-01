import React from 'react';

const ShowStats = ({ tasksList }) => {
	// calculate non completed tasks count
	let nonCompletedTasksCount = 0;
	tasksList.map(task => {
		return task.active ? nonCompletedTasksCount++ : nonCompletedTasksCount;
	});

	return (
		<div className="show-stats-box">
			{nonCompletedTasksCount} Tasks remaining from {tasksList.length}
		</div>
	);
};

export default ShowStats;
