import { createClass } from 'react'
import { ExerciseDayList } from './ExerciseDayList'
import { ExerciseDayCount } from './ExerciseDayCount'

export const App = createClass({
  getInitialState() {
    return {
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
  },
  countDays(filter) {
		const { allExerciseDays } = this.state
		return allExerciseDays.filter(
			(day) => (filter) ? day[filter] : day).length
	},
  render() {
    return (
      <div className="app">
        <ExerciseDayList days={this.state.allExerciseDays} />
        <ExerciseDayCount total={this.countDays()} weights={this.countDays("routine")} cardio={this.countDays("cardio")} />
      </div>
    )
  }
})
