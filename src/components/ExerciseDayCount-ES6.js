import { Component, PropTypes } from 'react'
import '../stylesheets/ui.scss'
import { FaWalking } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { FaHeartBeat } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

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
					<FaCalendarAlt />
					<span>days</span>
				</div>
				<div className="weights-days">
					<span>{this.props.weights}</span>
          <FaDumbbell />
					<span>days</span>
				</div>
				<div className="cardio-days">
					<span>{this.props.cardio}</span>
					<FaWalking />
					<span>days</span>
				</div>
        <div>
					<span>
						{this.calcGoalProgress(this.props.total, this.props.goal)}
					</span>
        </div>
			</div>
      )
    }
  }


ExerciseDayCount.defaultProps = {
  total: 50,
  weights: 10,
  cardio: 15,
  goal: 75
}

ExerciseDayCount.propTypes = {
  total: PropTypes.number,
  weights: PropTypes.number,
  cardio: PropTypes.number
}
