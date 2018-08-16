
import '../stylesheets/ui.scss'
import { FaWalking } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { FaHeartBeat } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

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
					<FaCalendarAlt />
					<span>days</span>
				</div>
				<div className="weights-days">
					<FaDumbbell />
					<span>{weights}</span>
					<span>days</span>
				</div>
				<div className="cardio-days">
					<span>{cardio}</span>
					<FaWalking />
					<span>days</span>
				</div>
					<span>
						{calcGoalProgress(total, goal)}
					</span>
				
			</div>
	)
