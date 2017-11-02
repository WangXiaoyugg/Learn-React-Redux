import React from 'react'
import ReactDom from 'react-dom'
import { createStore,applyMiddleware, compose } from 'redux';
import thunk  from 'redux-thunk'
import { Provider } from 'react-redux';
import { BrowserRouter,Route,Link } from 'react-router-dom'


import App from './app'
import { counter } from './index.redux'


const store = createStore(counter, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension(): f => f	
))

function Erying(){
	return <h2>二营</h2>
}

function Paobinglian(){
	return <h2>炮兵连</h2>
}


ReactDom.render(
		(<Provider store={store}>
			<BrowserRouter>
				<div>
					<ul>
						<li>
							<Link to='/'>一营</Link>
						</li>
						<li>
							<Link to='/erying'>二营</Link>
						</li>
						<li>
							<Link to='/paobinglian'>炮兵连</Link>
						</li>
						<Route path='/' exact component={App}></Route>
						<Route path='/erying' component={Erying}></Route>
						<Route path='/paobinglian' component={Paobinglian}></Route>
					</ul>
				</div>
			</BrowserRouter>
		</Provider>),
		document.getElementById('root')
);

