import React from 'react';

const TasksListHeader = (props) => {
	
	let taskHeaderContent = props.board.name;
	
	if(props.board.editing) {
		taskHeaderContent = (
			<form method="POST" onSubmit={(event) => props.submitBoardNameChange(event, props.board.id)}>
				<input className="board-name-edit" name="board-name" id="board-name" onChange={(event) => props.onChangeBoardName(event, props.board.id)} defaultValue={props.board.name} value={props.board.name} />
			</form>
		);
	}
	
	return (
		<div className="tasks-box-header">
			<span className="editable-content" onClick={() => props.boardNameChange(props.board.id)}>
				{taskHeaderContent}
			</span>
		</div>
	)
};

export default TasksListHeader;
