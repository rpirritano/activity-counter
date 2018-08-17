import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import { ExerciseDayList } from './components/ExerciseDayList'

window.React = React

render(
	<ExerciseDayList days={
		[
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
	}/>,
		document.getElementById('react-container')
	)
