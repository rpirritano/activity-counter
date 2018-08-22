import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {
  render() {

    const { routine, date, weights, cardio } = this.props

    return (
      <form className="add-day-form">

        <label htmlFor="routine">Routine:</label>
        <input id="routine" type="text" required defaultValue={routine} />

        <label htmlFor="date">Date:</label>
        <input id="date" type="date" required defaultValue={date} />

        <div>
          <label htmlFor="weights">Weights:</label>
          <input id="weights" type="checkbox" defaultChecked = {weights} />
        </div>

        <div>
          <label htmlFor="cardio">Cario:</label>
          <input id="cardio" type="checkbox" defaultChecked={cardio} />
        </div>

      </form>
    )
  }

}

AddDayForm.defaultProps = {
  routine: "P90x",
  date: "2018-08-21",
  weights: true,
  cardio: false
}

AddDayForm.propTypes = {
	routine: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	weights: PropTypes.bool.isRequired,
	cardio: PropTypes.bool.isRequired
}
