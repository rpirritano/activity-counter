
import '../stylesheets/ui.scss'

const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

export const ExerciseDayCount = ({total, weights, cardio, goal}) => (

			<div className="exercise-day-count">
				<div className="total-days">
					<span>{total}</span>
					<span>days</span>
				</div>
				<div className="weights-days">
					<span>{weights}</span>
					<span>days</span>
				</div>
				<div className="cardio-days">
					<span>{cardio}</span>
					<span>days</span>
				</div>
				<div className="cardio-days">
					<span>
						{calcGoalProgress(total, goal)}
					</span>
				</div>
			</div>
	)
