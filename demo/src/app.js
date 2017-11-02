import React from 'react'
import { addGUN } from './index.redux'

class App extends React.Component {
	
	render(){
		const store = this.props.store
		const num = store.getState();
		return (
			<div>
				<h1> 现有机关枪{num}把</h1>
				<button onClick={() => store.dispatch(addGUN())}>加机关枪</button>
			</div>
		)
	}
}

export default App