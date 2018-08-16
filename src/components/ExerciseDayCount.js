import { Component } from 'react'
import '../stylesheets/ui.scss'

export class ExerciseDayCount extends Component {

	percentToDecimal(decimal) {
		return ((decimal * 100) + '%')
	}
	calcGoalProgress(total, goal) {
		return this.percentToDecimal(total/goal)
	}


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
					<span>
						{this.calcGoalProgress(this.props.total, this.props.goal)}
					</span>
				</div>
			</div>
		)
	}
}
