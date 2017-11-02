import React from 'react'
import ReactDom from 'react-dom'
import { createStore,applyMiddleware } from 'redux';
import thunk  from 'redux-thunk'

import App from './app'
import { counter,addGUN,removeGUN,addGUNAsync } from './index.redux'

const store = createStore(counter, applyMiddleware(thunk))




function render(){
	ReactDom.render(<App store={store} addGUN={addGUN}  addGUNAsync={addGUNAsync} removeGUN={removeGUN} />,
		document.getElementById('root')
	);
}

render();

store.subscribe(render);
