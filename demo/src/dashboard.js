import React from  'react'
import { Link, Route } from 'react-router-dom';

import App from './app'

function Erying(){
	return <h2>二营</h2>
}

function Paobinglian(){
	return <h2>炮兵连</h2>
}


class Dashboard extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div>
				<ul>
					<li>
						<Link to='/dashboard'>一营</Link>
					</li>
					<li>
						<Link to='/dashboard/erying'>二营</Link>
					</li>
					<li>
						<Link to='/dashboard/paobinglian'>炮兵连</Link>
					</li>				
				</ul>
				<Route path='/dashboard' exact component={App}></Route>
				<Route path='/dashboard/erying' component={Erying}></Route>
				<Route path='/dashboard/paobinglian' component={Paobinglian}></Route>

			</div>
		)
	}
}

export default Dashboard