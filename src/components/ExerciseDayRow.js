import { FaWalking } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { PropTypes } from "react";

export const ExerciseDayRow = ({routine, date, weights, cardio}) => (
  <tr>
    <td>
      {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
    </td>
    <td>
      {routine}
    </td>
    <td>
      {(weights) ? <FaDumbbell /> : null}
    </td>
    <td>
      {(cardio) ? <FaWalking /> : null}
    </td>
  </tr>

)

ExerciseDayRow.propTypes = {
	routine: PropTypes.string.isRequired,
	date: PropTypes.instanceOf(Date).isRequired,
	weights: PropTypes.bool,
	cardio: PropTypes.bool
}
