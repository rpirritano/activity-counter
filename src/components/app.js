import { Component } from 'react'
import { ExerciseDayList } from './ExerciseDayList'
import { ExerciseDayCount } from './ExerciseDayCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allExerciseDays: [
      {
        routine: "P90X",
        date: "2018/08/21",
        weights: true,
        cardio: false
      }
    ]
    }
    this.addDay = this.addDay.bind(this)
  }

  addDay(newDay) {
    this.setState({
      allExerciseDays: [
        ...this.state.allExerciseDays,
        newDay
      ]
    })
  }

  countDays(filter) {
		const { allExerciseDays } = this.state
		return allExerciseDays.filter(
			(day) => (filter) ? day[filter] : day).length
	}

  render() {
  return (
    <div className="app">
    <Menu />
    {(this.props.location.pathname === "/") ?
      <ExerciseDayCount total={this.countDays()}
             weights={this.countDays(
                "weights"
              )}
             cardio={this.countDays(
                "cardio"
              )}/> :
     (this.props.location.pathname === "/add-day") ?
      <AddDayForm onNewDay={this.addDay} /> : //pass down as a prop
      <ExerciseDayList days={this.state.allExerciseDays}
                        filter={this.props.params.filter}/>
    }

    </div>
  )
}
}
