import C from './constants'
import { allExerciseDays, goal } from './initialState.json'

//Test to see if works initially
//Run with babel.node script (in node_modules/.bin./babel-node )
 // Change below in package.json file to check and then change back
//"start": "webpack-dev-server"
//"start": "./node_modules/.bin/babel-node ./src/"


console.log(`
	Exercise Day Counter
	=====================
	The goal is ${goal} days
	Initially there are ${allExerciseDays.length} exercise days in state

	Constants (actions)
	-------------------
	${Object.keys(C).join('\n        ')}
`)
