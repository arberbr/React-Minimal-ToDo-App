import React from 'react';

const ShowStats = ({ tasksList }) => {
	// calculate non completed tasks count
	let nonCompletedTasksCount = 0;
	tasksList.map(task => {
		return task.active ? nonCompletedTasksCount++ : nonCompletedTasksCount;
	});

	let stats = '';
	if (nonCompletedTasksCount === 0) {
		stats = 'Hooray, you are a task master!';
	} else {
		stats = `${nonCompletedTasksCount} Tasks remaining from ${
			tasksList.length
		}`;
	}

	return <div className="show-stats-box">{stats}</div>;
};

export default ShowStats;
