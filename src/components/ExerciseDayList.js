import { FaWalking } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { FaHeartBeat } from "react-icons/fa";
import { ExerciseDayRow } from './ExerciseDayRow';
import { PropTypes } from "react";

export const ExerciseDayList = ({days}) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Routine</th>
        <th>Weights</th>
        <th>Cardio</th>
      </tr>
    </thead>
    <tbody>
      {days.map((day, i) =>
      <ExerciseDayRow key={i}
                      {...day}/>
      )}
    </tbody>
  </table>
)

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
