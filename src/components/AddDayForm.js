import { PropTypes } from 'react'

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
			<input id="routine"
				   type="text"
				   required
				   defaultValue={routine}
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
