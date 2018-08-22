import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {

  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(e) {
    e.preventDefault()
    console.log('routine', this.refs.routine.value)
    console.log('date', this.refs.date.value)
    console.log('weights', this.refs.weights.checked)
    console.log('cardio', this.refs.cardio.checked)
  }
  render() {

    const { routine, date, weights, cardio } = this.props

    return (
      <form onSubmit={this.submit} className="add-day-form">

        <label htmlFor="routine">Routine:</label>
        <input id="routine" type="text" required defaultValue={routine} ref="routine" />

        <label htmlFor="date">Date:</label>
        <input id="date" type="date" required defaultValue={date} ref="date" />

        <div>
          <label htmlFor="weights">Weights:</label>
          <input id="weights" type="checkbox" defaultChecked = {weights} ref="weights" />
        </div>

        <div>
          <label htmlFor="cardio">Cario:</label>
          <input id="cardio" type="checkbox" defaultChecked={cardio} ref="cardio" />
        </div>
        <button>Add Exercise</button>
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
