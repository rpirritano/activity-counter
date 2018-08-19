import { Component } from 'react'
import { ExerciseDayList } from './ExerciseDayList'
import { ExerciseDayCount } from './ExerciseDayCount'
import { AddDayForm } from './AddDayForm'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allExerciseDays: [
      {
        routine: "P90X",
        date: new Date("8/1/2018"),
        weights: true,
        cardio: false
      },
      {
        routine: "Insanity",
        date: new Date("8/3/2018"),
        weights: false,
        cardio: true
      },
      {
        routine: "Jogging",
        date: new Date("8/5/2018"),
        weights: false,
        cardio: true
      }
    ]
    }
  }

  countDays(filter) {
		const { allExerciseDays } = this.state
		return allExerciseDays.filter(
			(day) => (filter) ? day[filter] : day).length
	}

  render() {
  return (
    <div className="app">
    {(this.props.location.pathname === "/") ?
      <ExerciseDayCount total={this.countDays()}
             weights={this.countDays(
                "weights"
              )}
             cardio={this.countDays(
                "cardio"
              )}/> :
     (this.props.location.pathname === "/add-day") ?
      <AddDayForm /> :
      <ExerciseDayList days={this.state.allExerciseDays}/>				 
    }

    </div>
  )
}
}
