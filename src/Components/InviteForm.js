import React from 'react';

export class InviteForm extends React.Components{
	constructor (props){
		super(props);

		this.state = {name: ""};
		this.handleUserInput = this.handleUserInput.bind(this);
	}

	handleUserInput(){
		this.state.name;
	}

	render(){
		<form>
			<input type="text" value={this.state.name} placeholder="Invite Someone">
			<button type="submit" name="submit" value="submit" onClick={this.handleUserInput}>Submit</button>
		</form>
	}
}