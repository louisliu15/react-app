import React from 'react'
import PropTypes from 'prop-types'
import PendingGuest from './PendingGuest'
import Guest from './Guest'

const GuestList = props =>
	<ul>
		<PendingGuest name={props.pendingGuest}/>
		{props.guests
			.filter(guest => !props.isFiltered || guest.isConfirmed)
			.map((guest, index) =>
				<Guest 
					key={index}
					name={guest.name}
					isConfirmed={guest.isConfirmed}
					isEditing={guest.isEditing}
					handleNameEdits={text => props.updateName(text, guest.id)}
					handleComfirmToggle={() => props.toggleComfirmation(guest.id)}
					handleEditToggle={() => props.toggleEditing(guest.id)}
					handleRemove={() => props.removeGuest(guest.id)}
				/>
			)
		}
	</ul>

GuestList.PropTypes={
	guests:PropTypes.array.isRequired,
	pendingGuest:PropTypes.string.isRequired,
	isComfirmed:PropTypes.bool.isRequired,
	isEditing:PropTypes.bool.isRequired,
	updateName:PropTypes.func.isRequired,
	toggleComfirmation:PropTypes.func.isRequired,
	toggleEditing:PropTypes.func.isRequired,
	removeGuest:PropTypes.func.isRequired,
}

export default GuestList;