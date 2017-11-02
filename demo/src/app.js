import React from 'react'


class App extends React.Component {
	
	render(){
		const store = this.props.store;
		const num = store.getState();
		const addGUN = this.props.addGUN;
		const removeGUN = this.props.removeGUN;

		return (
			<div>
				<h1> 现有机关枪{num}把</h1>
				<button onClick={() => store.dispatch(addGUN())}>加机关枪</button>
				<button onClick={() => store.dispatch(removeGUN())}>减机关枪</button>
			</div>
		)
	}
}

export default App