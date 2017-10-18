import React from 'react'
import PropTypes from 'prop-types'
import GuestName from './GuestName'

const Guest = props =>
	<li>
		<GuestName 
			isEditing={props.isEditing}
			handleNameEdits={e => props.handleNameEdits(e.target.value)}
		>{props.name}
		</GuestName>
		<label>
			<input 
				type="checkbox"
				checked={props.isConfirmed}
				onChange={props.handleComfirmToggle}
			/>Confirmed
		</label>
		<button onClick={props.handleEditToggle}>
			{props.isEditing?"save":"edit"}
		</button>
		<button onClick={props.handleRemove}>remove</button>
	</li>

Guest.PropTypes={
	isEditing:PropTypes.bool.isRequired,
	isComfirmed:PropTypes.bool.isRequired,
	handleComfirmToggle:PropTypes.func.isRequired,
	handleNameEdits:PropTypes.func.isRequired,
	hanldeRemove:PropTypes.func.isRequired
}

export default Guest;