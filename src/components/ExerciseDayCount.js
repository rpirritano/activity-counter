
import '../stylesheets/ui.scss'
import { FaWalking } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { FaHeartBeat } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { PropTypes } from "react";

const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

export const ExerciseDayCount = ({total=70, weights=20, cardio=10, goal=100}) => (
	<div className="exercise-day-count">
		<div className="total-days">
			<span>{total}</span>
			<FaCalendarAlt />
			<span>days</span>
			</div>
		<div className="weights-days">
			<span>{weights}</span>
			<FaDumbbell />
			<span>days</span>
		</div>
		<div className="cardio-days">
			<span>{cardio}</span>
			<FaWalking />
			<span>days</span>
		</div>
		<div>
			<span>
				{calcGoalProgress(total, goal)}
			</span>
		</div>
	</div>
)

ExerciseDayCount.propTypes = {
  total: PropTypes.number,
  weights: PropTypes.number,
  cardio: PropTypes.number,
	goal: PropTypes.number
}
