import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import { App } from './components/App'
import { Page404 } from './components/Page404'
import { Router, Route, hashHistory } from 'react-router'

window.React = React

render(
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="*" component={Page404}/>
	</Router>,
		document.getElementById('react-container')
	)
