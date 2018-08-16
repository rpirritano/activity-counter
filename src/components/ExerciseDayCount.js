import React from 'react'
import '../stylesheets/ui.scss'

export const ExerciseDayCount = React.createClass({
	render() {
		return (
			<div className="exercise-day-count">
				<div className="total-days">
					<span>{this.props.total}</span>
					<span>days</span>
				</div>
				<div className="weights-days">
					<span>{this.props.weights}</span>
					<span>days</span>
				</div>
				<div className="cardio-days">
					<span>{this.props.cardio}</span>
					<span>days</span>
				</div>
				<div className="cardio-days">
					<span>{this.props.goal}</span>
				</div>
			</div>
		)
	}
})
