import React from 'react'
import {connect} from 'react-redux'
import { NavBar } from 'antd-mobile'

function Boss(){
	return <h2>Boss 首页</h2>
}

function Genius(){
	return <h2>Genius 首页</h2>
}

function Msg(){
	return <h2>Msg 首页</h2>
}

function User(){
	return <h2>User 首页</h2>
}


@connect(
	state => state
)
 class Dashboard extends React.Component {


 	render(){
 		const user = this.props.user
 		const {pathname} = this.props.location		
 		const navList = [
 			{
 				path:'/boss',
 				text:'牛人',
 				icon:'boss',
 				title:'牛人列表',
 				component:Boss,
 				hide:user.type === 'genius'
 			},
 			{
 				path:'/genius',
 				text:'boss',
 				icon:'job',
 				title:'Boss列表',
 				component:Genius,
 				hide:user.type === 'boss'
 			},
 			{
 				path:'/msg',
 				text:'消息',
 				icon:'msg',
 				title:'消息列表',
 				component:Msg,
 			},
 			{
 				path:'/me',
 				text:'我',
 				icon:'me',
 				title:'个人中心',
 				component:User,
 			},
 		]

 		return (
 			<div>
 				<NavBar mode='dark'>
 					{navList.find(v => v.path === pathname).title}
 				</NavBar>	
 				 <h2>Dashboard footer</h2>
 			</div>
 		)
 	}
 }

 export default Dashboard