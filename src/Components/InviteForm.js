import React from 'react'
import PropTypes from 'prop-types'

const InviteForm = props =>
	<form onSubmit={props.newGuestSubmitHandler}>
		<input 
			type="text"
			value={props.pendingGuest} 
			onChange={props.handleNameInput} 
			placeholder="Invite Someone" />
		<button name="submit" type="submit" value="submit">Submit</button>
	</form>

InviteForm.PropTypes = {
	pendingGuest: PropTypes.string.isRequired,
	newGuestSubmitHandler: PropTypes.func.isRequired,
	handleNameInput: PropTypes.func.isRequired
}

export default InviteForm;