import React from 'react'
import { render } from 'react-dom'
import { ExerciseDayCount } from './components/ExerciseDayCount'

window.React = React

render(
	<ExerciseDayCount total={6}
	 									weights={3}
										cardio={3}
										goal={6}/>,
	document.getElementById('react-container')
)
