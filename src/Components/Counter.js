import React from 'react'
import PropTypes from 'prop-types'

const Counter = props =>
	<table className="counter">
		<tbody>
			<tr>
				<td>Total</td>
				<td>{props.totalGuest}</td>
			</tr>
			<tr>
				<td>Confirmed</td>
				<td>{props.confirmedGuest}</td>
			</tr>
			<tr>
				<td>Unconfirmed</td>
				<td>{props.unconfirmedGuest}</td>
			</tr>
		</tbody>
	</table>

Counter.PropTypes = {
	totalGuest: PropTypes.number,
	confirmedGuest: PropTypes.number,
	unconfirmedGuest: PropTypes.number,
}

export default Counter;