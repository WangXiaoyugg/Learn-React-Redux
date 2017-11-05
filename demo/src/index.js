import React from 'react'
import ReactDom from 'react-dom'
import { createStore,applyMiddleware, compose } from 'redux';
import thunk  from 'redux-thunk'
import { Provider } from 'react-redux';
import { BrowserRouter,Route,Link,Redirect,Switch } from 'react-router-dom'



// import { counter } from './index.redux'
import reducers from './reducers'
import Auth from './auth.js'
import Dashboard from './dashboard.js'


const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension(): f => f	
))


// class Test extends  React.Component {
// 	constructor(props){
// 		super(props)
// 	}

// 	render(){
// 		const props = this.props;
// 		return (
// 			<h2>测试组件 {props.match.params.location}</h2>	
// 		)
// 	}
// }

// 登录
	// 没有登录信息，统一跳转到login
// 页面	导航+显示+注销	
	// 一营
	// 二营
	// 骑兵连
//router + redux

ReactDom.render(
		(<Provider store={store}>
			<BrowserRouter>
				<Switch>
					{/*只渲染第一个命中的组件*/}
					<Route path='/login'  component={Auth}></Route>
					<Route path='/dashboard' component={Dashboard}></Route>
					<Redirect to='/dashboard'></Redirect>
				</Switch>
			</BrowserRouter>
		</Provider>),
		document.getElementById('root')
);

