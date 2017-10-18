import React from 'react'
import PropTypes from 'prop-types'
import InviteForm from './InviteForm'

const Header = props =>
	<header>
		<h1>RSVP</h1>
		<p>A Treehouse App</p>
		<InviteForm 
			newGuestSubmitHandler={props.newGuestSubmitHandler}
			handleNameInput={props.handleNameInput}
			pendingGuest={props.pendingGuest}
		/>
	</header>

Header.PropTypes = {
	pendingGuest: PropTypes.string.isRequired,
	newGuestSubmitHandler: PropTypes.func.isRequired,
	handleNameInput: PropTypes.func.isRequired
}

export default Header;