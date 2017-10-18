import React from 'react'
import PropTypes from 'prop-types'
import GuestList from './GuestList'
import Counter from './Counter'

const Content = props =>
	<div className="main" >
		<h2>Invitees</h2>
		<label>
			<input 
				type="checkbox"
				onChange={props.toggleFilter}
				checked={props.isFiltered}
			/>Hide those who haven{"'"}t responded
		</label>
		<Counter 
			totalGuest={props.totalGuest}
			confirmedGuest={props.confirmedGuest}
			unconfirmedGuest={props.unconfirmedGuest}
		/>
		<GuestList 
			guests={props.guests}
			pendingGuest={props.pendingGuest}
			isFiltered={props.isFiltered}
			updateName={props.updateName}
			toggleComfirmation={props.toggleComfirmation}
			toggleEditing={props.toggleEditing}
			removeGuest={props.removeGuest}
		/>
	</div>

Content.PropTypes={
	guests:PropTypes.array.isRequired,
	pendingGuest:PropTypes.string.isRequired,
	totalGuest: PropTypes.number,
	confirmedGuest: PropTypes.number,
	unconfirmedGuest: PropTypes.number,
	isComfirmed:PropTypes.bool.isRequired,
	isEditing:PropTypes.bool.isRequired,
	isFiltered:PropTypes.bool.isRequired,
	updateName:PropTypes.func.isRequired,
	toggleComfirmation:PropTypes.func.isRequired,
	toggleEditing:PropTypes.func.isRequired,
	toggleFilter:PropTypes.func.isRequired,
	removeGuest:PropTypes.func.isRequired,
}

export default Content;