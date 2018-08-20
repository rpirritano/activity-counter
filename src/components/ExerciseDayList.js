import { FaWalking } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { FaHeartBeat } from "react-icons/fa";
import { ExerciseDayRow } from './ExerciseDayRow';
import { PropTypes } from "react";
import { Link } from 'react-router'

export const ExerciseDayList = ({days, filter}) => {
  const filterdDays = (!filter || !filter.match(/weights|cardio/)) ? days : days.filter(day => day[filter])

  return (
    <div className="exercise-day-list">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Routine</th>
            <th>Weights</th>
            <th>Cardio</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <Link to="/list-days">
                All Days
              </Link>
              <Link to="/list-days/weights">
                Weights Days
              </Link>
              <Link to="/list-days/cardio">
                Cardio Days
              </Link>

            </td>
          </tr>
        </thead>
        <tbody>
          {filterdDays.map((day, i) =>
            <ExerciseDayRow key={i}
                        {...day}/>
                      )}
        </tbody>
      </table>
    </div>
  )
}

ExerciseDayList.propTypes = {
	days: function(props) {
		if(!Array.isArray(props.days)) {
			return new Error(
				"ExerciseDayList should be an array"
				)
		} else if(!props.days.length) {
			return new Error(
				"ExerciseDayList must have at least one record"
				)
		} else {
			return null
		}
	}
}
