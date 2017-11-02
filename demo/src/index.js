import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux';

import App from './app'
import { counter } from './index.redux'

const store = createStore(counter)




function render(){
	ReactDom.render(<App store={store}/>,document.getElementById('root'));
}

render();

store.subscribe(render);
