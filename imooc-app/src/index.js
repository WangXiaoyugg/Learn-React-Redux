import React from 'react'
import ReactDom from 'react-dom'
import { createStore,applyMiddleware, compose } from 'redux';
import thunk  from 'redux-thunk'
import { Provider } from 'react-redux';
import { BrowserRouter,Route,Redirect,Switch } from 'react-router-dom'

import './config'
import 'antd-mobile/dist/antd-mobile.css'

import reducers from './reducers'

import Login from './container/login/login.js'
import Register from './container/register/register.js' 
import AuthRoute from './component/authRoute/authRoute.js'


const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension(): f => f	
))



ReactDom.render(
		(<Provider store={store}>
			<BrowserRouter>
				<div>
					<AuthRoute></AuthRoute>
					<Route path='/login' component={Login}></Route>
					<Route path='/register' component={Register}></Route>
				</div>
			</BrowserRouter>
		</Provider>),
		document.getElementById('root')
);

