import React, {Component} from 'react';

import TasksList from '../Tasks/TasksList';

class Boards extends Component {
	
	state = {
		boards: [
			{
				id: 23424342424,
				name: 'To Do',
				editing: false
			},
			{
				id: 4566456342434,
				name: 'Doing',
				editing: false
			},
			{
				id: 3456356234242,
				name: 'Completed',
				editing: false
			}
		]
	};
	
	boardNameChangeHandler = boardId => {
		const newBoards = this.state.boards.filter(board => {
			if(board.id === boardId) {
				board.editing = true;
			}
			return board;
		});
		this.setState({
			boards: newBoards
		});
	};
	
	onBoardChangeNameHandler = (event, boardId) => {
		if(event.target.value <= 3) {
			alert('Please enter a valid Board Name');
			return;
		}
		const newBoards = this.state.boards.filter(board => {
			if(board.id === boardId) {
				board.name = event.target.value;
				board.editing = true;
			}
			return board;
		});
		this.setState({
			boards: newBoards
		});
	};
	
	onSubmitBoardNameChangeHandler = (event, boardId) => {
		event.preventDefault();
		const newBoards = this.state.boards.filter(board => {
			if(board.id === boardId) {
				board.editing = false;
			}
			return board;
		});
		this.setState({
			boards: newBoards
		});
	};
	
	render() {
		
		let boards = this.state.boards.map(board => {
			return <TasksList
				key={board.id}
				board={board}
				changeBoardName={(boardId) => this.boardNameChangeHandler(boardId)}
				onBoardNameChange={(event, boardId) => this.onBoardChangeNameHandler(event, boardId)}
				submitBoardNameChange={(event, boardId) => this.onSubmitBoardNameChangeHandler(event, boardId)} />
		});
		
		return(
			<div className="boards-box">
				{boards}
			</div>
		)
	}
};

export default Boards;
