import { createClass, PropTypes } from 'react'
import '../stylesheets/ui.scss'
import { FaWalking } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { FaHeartBeat } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

export const ExerciseDayCount = createClass({
  propTypes: {
    total: PropTypes.number.isRequired,
    weights: PropTypes.number,
    cardio: PropTypes.number
  },
  getDefaultProps() {
    return {
      total: 53,
      weights: 45,
      cardio: 23,
      goal: 100
    }
  },

  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  },
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  },

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
  })
