import React from 'react'
import { connect } from 'react-redux'
import { addGUN,removeGUN,addGUNAsync } from './index.redux'
class App extends React.Component {
	
	render(){
		return (
			<div>
				<h1> 现有机关枪{this.props.num}把</h1>
				<button onClick={this.props.addGUN}>加机关枪</button>
				<button onClick={this.props.removeGUN}>减机关枪</button>
				<button onClick={this.props.addGUNAsync}>过两秒加加机关枪</button>
			</div>
		)
	}
}

const mapStatetoProps = (state) => {
	return {num:state}
}

const actionCreators = { addGUN,removeGUN,addGUNAsync }

App = connect(mapStatetoProps, actionCreators)(App)

export default App