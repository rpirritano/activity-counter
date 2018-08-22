import { PropTypes, Component } from 'react'

const exerciseRoutines = [
  "Chest & Back",
  "Shoulders & Arms",
  "Legs & Back",
  "Yoga X",
  "Ab Ripper X",
  "Pylometric Cardio Circuit",
  "Cardio Power & Resistance",
  "Max Inerval Circuit",
  "Cardio Abs"
]

class Autocomplete extends Component {
  get value() {
    return this.refs.inputExercise.value
  }

  set value(inputExercise) {
    this.refs.inputExercise.value = inputValue
  }

  render() {
    return (
      <div>
        <input ref="inputExercise" type="text" list="exerciseRoutines" />
        <datalist id="exerciseRoutines">
          {this.props.options.map(
            (opt, i) =>
            <option key={i}>{opt}</option>)}
        </datalist>
      </div>
    )
  }
}

export const AddDayForm = ({ routine, date, weights, cardio, onNewDay }) => {

  let _routine, _date, _weights, _cardio

  const submit = (e) => {
    e.preventDefault()
    onNewDay({
      routine: _routine.value,
      date: _date.value,
      weights: _weights.checked,
      cardio: _cardio.checked
    })
    //reset values
    _routine.value = ''
    _date.value = ''
    _weights.value = false
    _cardio.value = false
  }

  return (
		<form onSubmit={submit} className="add-day-form">

			<label htmlFor="routine">Routine Name</label>
			<Autocomplete options={exerciseRoutines}
				   ref={input => _routine = input}/>

			<label htmlFor="date">Date</label>
			<input id="date"
				   type="date"
				   required
				   defaultValue={date}
				   ref={input => _date = input}/>

			<div>
				<input id="weights"
					   type="checkbox"
					   defaultChecked={weights}
					   ref="weights"
					   ref={input => _weights = input}/>
				<label htmlFor="powder">Weights Day</label>
			</div>

			<div>
				<input id="cardio"
					   type="checkbox"
					   defaultChecked={cardio}
					   ref="cardio"
					   ref={input => _cardio = input}/>
				<label htmlFor="cardio">
					Cardio Day
				</label>
			</div>
			<button>Add Day</button>
		</form>
	)
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
